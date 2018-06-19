var icons = ['add', 'heart'];

var iconContainerTemplate = '<article>' +
  '<span class="css-icon css-icon-{iconName}"></span>' +
  '<p>{iconName}</p>' +
  '</article>';

$(document).ready(function() {
  icons.forEach(function(icon) {
    $('section').append(iconContainerTemplate.replace(/\{iconName\}/g, icon));
  });
});