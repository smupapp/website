#!/bin/bash

read -p "Enter name: " name
read -p "Enter email: " email
read -p "Enter phone: " phone
read -p "Enter street address: " street
read -p "Enter city: " city
read -p "Enter state: " state
read -p "Enter zip code: " zip

echo "{
  \"name\": \"$name\",
  \"email\": \"$email\",
  \"phone\": \"$phone\",
  \"address\": {
    \"street\": \"$street\",
    \"city\": \"$city\",
    \"state\": \"$state\",
    \"zip\": \"$zip\"
  }
}"
