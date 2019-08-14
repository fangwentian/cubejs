cube(`Books`, {
  sql: `SELECT * FROM test.books`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [date, id, name]
    }
  },
  
  dimensions: {
    date: {
      sql: `date`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    price: {
      sql: `price`,
      type: `string`
    }
  }
});
