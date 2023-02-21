const Utils = {};


Utils.getIcon = (data, icons, prefix) => {
  prefix = prefix || '';

  if (data.icon_url) {
    return data.icon_url;
  }

  if (icons[data.category]) {
    return `${prefix}/${icons[data.category]}`;
  }

  return `${prefix}/logo192.png`;
}


module.exports = Utils;
