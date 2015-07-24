var BudgetDemo = {
  getLocalDemo : function() {
    return [
      {
        name : 'Planting',
        total : 300,
        units : 'ac',
        operations : [
          {
            name : 'Weed Control',
            total : 150,
            units : 'ac',
            interval : '',
            intervalAmount : 1,
            timeMultiplier : 0,
            materials : [
              {
                name : 'Herbicide',
                amount : 15,
                units : 'oz',
                price : 15
              },
              {
                name : 'Labor',
                amount : 43,
                units : 'hr',
                price : 23
              }
            ]
          }
        ]
      },
      {
        name : 'Maintain',
        total : 5000,
        units : 'ac',
        operations : [
          {
            name : 'Weed Control',
            total : 150,
            units : 'ac',
            interval : '',
            intervalAmount : 1,
            timeMultiplier : 0,
            materials : [
              {
                name : 'Herbicide',
                amount : 15,
                units : 'oz',
                price : 15
              }
            ],
          },
          {
            name : 'Foo',
            total : 10,
            units : 'ac',
            interval : '',
            intervalAmount : 1,
            timeMultiplier : 0,
            materials : [
              {
                name : 'Bar',
                amount : 15,
                units : 'ac',
                price : 15
              }
            ],
          }
        ]
      },
      {
        name : 'Harvest',
        total : 500,
        units : 'ac',
        operations : [
          {
            name : 'Pull Plant',
            total : 100,
            units : 'ac',
            interval : '',
            intervalAmount : 1,
            timeMultiplier : 0,
            materials : [
              {
                name : 'Labor',
                amount : 5,
                units : 'oz',
                price : 8
              }
            ],
          },
          {
            name : 'Package',
            total : 1000,
            units : 'ac',
            interval : '',
            intervalAmount : 1,
            timeMultiplier : 0,
            materials : [
              {
                name : 'Labor',
                amount : 15,
                units : 'oz',
                price : 10
              }
            ],
          }
        ]
      }
    ];
  }
}
