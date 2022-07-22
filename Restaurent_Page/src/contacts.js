const contacts = (() => {
  const content = document.querySelector('#content');

  function render() {
    content.textContent = '';
    content.classList.remove('home');
    content.classList.add('background');
    // Headline
    const headline = document.createElement('h1');
    headline.classList.add('contacts-headline');
    headline.textContent = 'Order now!';
    content.appendChild(headline);
    // Contacts flex layout
    const contactsFlex = document.createElement('div');
    contactsFlex.classList.add('contacts-flex');
    content.appendChild(contactsFlex);
    // First container
    const contactsListContainer = document.createElement('div');
    contactsFlex.appendChild(contactsListContainer);
    // Container's heading
    const contactsListHeadline = document.createElement('h2');
    contactsListHeadline.textContent = 'Contacts';
    contactsListContainer.appendChild(contactsListHeadline);
    // Contacts list
    const contactsList = document.createElement('div');
    contactsList.classList.add('contacts-list');
    contactsListContainer.appendChild(contactsList);
    // Call us
    const contactsListCall = document.createElement('h3');
    contactsList.appendChild(contactsListCall);
    const contactsListCallText = document.createTextNode('Call us: ');
    contactsListCall.appendChild(contactsListCallText);
    const contactsListCallLink = document.createElement('a');
    contactsListCallLink.setAttribute('href', 'tel:+919882437123');
    contactsListCallLink.textContent = '+91 988 243 7123';
    contactsListCall.appendChild(contactsListCallLink);
    
    const contactsListFollow = document.createElement('h3');
    contactsList.appendChild(contactsListFollow);
    const contactsListFollowText = document.createTextNode('Follow us: ');
    contactsListFollow.appendChild(contactsListFollowText);
    const contactsListFollowInsta = document.createElement('a');
    contactsListFollowInsta.setAttribute('href', 'https://instagram/avisekh_hh/');
    contactsListFollowInsta.setAttribute('target', '_blank');
    contactsListFollowInsta.textContent = 'Instagram';
    contactsListFollow.appendChild(contactsListFollowInsta);
    const sep = document.createTextNode(' / ');
    contactsListFollow.appendChild(sep);
    const contactsListFollowFb = document.createElement('a');
    contactsListFollowFb.setAttribute('href', 'https://facebook.com/abhishek');
    contactsListFollowFb.setAttribute('target', '_blank');
    contactsListFollowFb.textContent = 'Facebook';
    contactsListFollow.appendChild(contactsListFollowFb);
    const sep2 = document.createTextNode(' / ');
    contactsListFollow.appendChild(sep2);

    const contactsListHours = document.createElement('h3');
    contactsListHours.textContent = 'Working hours:';
    contactsList.appendChild(contactsListHours);
    const contactsListHoursFlex = document.createElement('div');
    contactsListHoursFlex.classList.add('contacts-working-hours');
    contactsList.appendChild(contactsListHoursFlex);
    // Working hours days div
    const contactsListHoursDays = document.createElement('div');
    contactsListHoursFlex.appendChild(contactsListHoursDays);
    const contactsListHoursDaysP = document.createElement('p');
    contactsListHoursDaysP.textContent = 'MON-FRI';
    contactsListHoursDays.appendChild(contactsListHoursDaysP);
    const contactsListHoursDaysP2 = document.createElement('p');
    contactsListHoursDaysP2.textContent = 'SAT-SUN';
    contactsListHoursDays.appendChild(contactsListHoursDaysP2);
    // Working hours time div
    const contactsListHoursTime = document.createElement('div');
    contactsListHoursFlex.appendChild(contactsListHoursTime);
    const contactsListHoursTimeP = document.createElement('p');
    contactsListHoursTimeP.textContent = '10:00 - 22:00';
    contactsListHoursTime.appendChild(contactsListHoursTimeP);
    const contactsListHoursTimeP2 = document.createElement('p');
    contactsListHoursTimeP2.textContent = '12:00 - 22:00';
    contactsListHoursTime.appendChild(contactsListHoursTimeP2);

  }

  return {
    render,
  };
})();

export default contacts;
