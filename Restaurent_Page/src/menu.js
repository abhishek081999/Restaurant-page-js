const menu = (() => {
  const content = document.querySelector('#content');

  const legend = [
    {
      text: 'TOP PICK',
      icon: 'far fa-crown top-pick',
    },
    {
      text: 'VEG',
      icon: 'far fa-leaf vegan',
    },
    {
      text: 'Balanced',
      icon: 'far fa-percent alco',
    },
  ];

  const categories = ['Lunch', 'Salads', 'Drinks', 'Desserts'];

  const food = [
    [
      {
        name: 'Premium Thali 400 RS',
        description: 'Dal,Chapatis,Shahi paneer,Papad,Dahi.',
        badges: ['far fa-crown top-pick'],
      },
      {
        name: 'Delux Thali 200 RS',
        description: 'Dal,Chapatis,Rice.',
        badges: ['far fa-leaf vegan'],
      },
      {
        name: 'Mix Dosa 70 RS',
        description: 'Tomatoes, Dosa,Cucumber,Dahi.',
        badges: [],
      },
      {
        name: 'Pao Bhaji  80 RS',
        description: 'Pao, salt, Bhaji.',
        badges: ['far fa-leaf vegan'],
      },
    ],
    [
      {
        name: 'green Salad  60 RS',
        description: 'red onions, tomatoes,vinegar, spanich.',
        badges: ['far fa-leaf vegan'],
      },
      {
        name: 'Fruit Salad 100 Rs',
        description: 'Apple, tomatoes, Banana,promognate',
        badges: [],
      },
    ],
    [
      {
        name: 'Chai 10 RS',
        description: 'Traditional indian tea, milk or vegan versions.',
        badges: ['far fa-crown top-pick'],
      },
      {
        name: 'Coconut drink 100 RS',
        description: 'Carconate Drinks',
        badges: ['far fa-percent alco'],
      },
      {
        name: 'Lemonade 20 RS',
        description: 'Homemade lemonade.',
        badges: [],
      },
      {
        name: 'Herbal Tea 30 RS',
        description: 'Warming tea for rainy days.',
        badges: [],
      },
    ],
    [
      {
        name: 'Chocolava Cake  60 Rs',
        description: 'pastry dessert.',
        badges: [],
      },
      {
        name: 'Chenimurgi  400 Rs ',
        description: 'Sweet balls full of energy.',
        badges: ['far fa-leaf vegan'],
      },
    ],
  ];

  function render() {
    content.textContent = '';
    content.classList.remove('home');
    content.classList.add('background');


    const headline = document.createElement('h1');
    headline.classList.add('menu-headline');
    headline.textContent = 'MENU';
    content.appendChild(headline);
   

    
    const menuLegend = document.createElement('div');
    menuLegend.classList.add('menu-legend');
    content.appendChild(menuLegend);
  


    for (let l = 0; l < legend.length; l += 1) {
      const menuLegendItem = document.createElement('p');
      menuLegend.appendChild(menuLegendItem);
      const menuLegendItemIcon = document.createElement('i');
      menuLegendItemIcon.className = legend[l].icon;
      menuLegendItem.appendChild(menuLegendItemIcon);
      const menuLegendBr = document.createElement('br');
      menuLegendItem.appendChild(menuLegendBr);
      const menuLegendText = document.createTextNode(legend[l].text);
      menuLegendItem.appendChild(menuLegendText);
    }
   


    for (let i = 0; i < categories.length; i += 1) {
      const categoryTitle = document.createElement('h2');
      categoryTitle.classList.add('menu-category');
      categoryTitle.textContent = categories[i];
      content.appendChild(categoryTitle);
      if (categories[i] === 'Pizza') {
        const pizzaInfo = document.createElement('p');
        pizzaInfo.classList.add('pizza-category-info');
        content.appendChild(pizzaInfo);
        const pizzaInfoIcon = document.createElement('i');
        pizzaInfoIcon.classList.add('far', 'fa-pizza');
        pizzaInfo.appendChild(pizzaInfoIcon);
        const pizzaInfoText = document.createTextNode(' - 35CM');
        pizzaInfo.appendChild(pizzaInfoText);
      }


      const menuGrid = document.createElement('div');
      menuGrid.classList.add('menu-grid');
      content.appendChild(menuGrid);
      


      for (let j = 0; j < food[i].length; j += 1) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuGrid.appendChild(menuItem);
        const foodName = document.createElement('h3');
        foodName.textContent = food[i][j].name;
        menuItem.appendChild(foodName);
        if (food[i][j].badges !== []) {
          for (let k = 0; k < food[i][j].badges.length; k += 1) {
            const badge = document.createElement('i');
            badge.className = food[i][j].badges[k];
            foodName.appendChild(badge);
          }
        }
        const foodDesc = document.createElement('p');
        foodDesc.textContent = food[i][j].description;
        menuItem.appendChild(foodDesc);
      }
    }
  }

  return {
    render,
  };
})();

export default menu;
