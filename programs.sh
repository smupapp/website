#!/bin/bash

#set -x # debug logs
set -e

read -p "Enter name: " name
read -p "Enter description: " description
read -p "Enter logo url: " logo_url
read -p "Enter website url: " link_web
read -p "Enter program page url: " link_program
read -p "Reward bounty? [Boolean: (true / false)]: " options_bounty
read -p "Reward Swag? [Boolean: (true / false)]: " options_swag
read -p "Provides Hall of Fame? [Boolean: (true / false)]: " options_hof
read -p "Report email (optional): " report_email
read -p "Report url (optional): " report_url

# $(uuidgen)
program="{
  \"id\": \"$(uuidgen)\",
  \"title\": \"$name\",
  \"description\": \"$description\",
  \"logo_url\": \"$logo_url\",
  \"links\": {
    \"web\": \"$link_web\",
    \"program\": \"$link_program\"
  },
  \"options\": {
    \"bounty\": $options_bounty,
    \"swag\": $options_swag,
    \"hof\": $options_hof
  },
  \"report\": {
    \"email\": \"$report_email\",
    \"link\": \"$report_url\"
  }
}"

if ! echo "$program" | jq empty 2> /dev/null; then
  echo "Error: invalid JSON input."
  exit 1
fi

# Load existing JSON array file
json_file="src/constants/programs.json"
json_data=$(cat "$json_file")

# Check if the file contains a valid JSON array
if [[ $json_data != "["*"]" ]]; then
  echo "Error: $json_file does not contain a valid JSON array."
  exit 1
fi

# Update the JSON array with the new value
updated_json=$(echo "$json_data" | jq --argjson new_object "$program" '. + [$new_object]')

sorted_json=$(echo "$updated_json" | jq 'sort_by(.title | ascii_downcase)')

echo $sorted_json | jq > "src/constants/programs.json"

echo "Yoohoo! Program $name is added to bugbountytools"

tweet="Just added a new self-managed bug bounty program \"$name\" to the list on https://bugbountytools.netlify.app/. Excited to contribute to the community and help keep the internet secure. Check it out and add your program too! #bugbounty #cybersecurity #opensource"

encoded_tweet=$(echo -n "$tweet" | jq -sRr @uri)
tweet_url="https://twitter.com/intent/tweet?text=$encoded_tweet"

echo "Go ahead and tweet about it by clicking this link: "$tweet_url
