const home = (() => {
  const content = document.querySelector('#content');

  const badges = [
    {
      text: 'ALL NATURAL',
      icon: 'far fa-carrot',
    },
    {
      text: 'HAND MADE',
      icon: 'far fa-hat-chef',
    },
    {
      text: 'VEGETARIAN',
      icon: 'far fa-leaf-heart',
    },
  ];

  function render() {
    content.classList.remove('background');
    content.classList.add('home');
    content.textContent = '';
  

    const headline = document.createElement('h1');
    headline.classList.add('home-headline');
    headline.textContent = 'Pure veg Indian';
    content.appendChild(headline);
    

    const sep = document.createElement('div');
    sep.classList.add('home-sep');
    content.appendChild(sep);
    // Subtitle
    const subtitle = document.createElement('p');
    subtitle.classList.add('home-subtitle');
    subtitle.textContent = 'MAA KA KHANA';
    content.appendChild(subtitle);
    // Button
    const button = document.createElement('a');
    button.classList.add('home-button');
    button.textContent = 'MENU';
    content.appendChild(button);
    // Badges wrapper
    const badgesWrapper = document.createElement('div');
    badgesWrapper.classList.add('home-badges');
    content.appendChild(badgesWrapper);
    // Badges
    for (let i = 0; i < badges.length; i += 1) {
      const badge = document.createElement('p');
      badgesWrapper.appendChild(badge);
      const badgeIcon = document.createElement('i');
      badgeIcon.className = badges[i].icon;
      badge.appendChild(badgeIcon);
      const badgeBr = document.createElement('br');
      badge.appendChild(badgeBr);
      const badgeText = document.createTextNode(badges[i].text);
      badge.appendChild(badgeText);
    }
  }

  return {
    render,
  };
})();

export default home;
