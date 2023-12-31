const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const getDaysInMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  
  // Only edit below
  
   //The code defines a function createArray(length) that creates an array of a specified length and initializes it with empty values. This function is used to create an array of weeks (5 weeks) in this context.
  
  const createArray = (length) => {
    const result = []
  
    for (let i = 0; i < length; i++) {
      result.push(i);
    }
  
    return result
  };
  const createData = () => {
    const current = new Date();
    current.setDate(1); // Used setDate() to set the day of the month
  
    const startDay = current.getDay(); // Used getDay() to get the day of the week
    const daysInMonth = getDaysInMonth(current);
  
      const weeks = createArray(5); //array with 5 elements representing weeks
      const result = [];
      
  
    for (const weekIndex of weeks) { // Use "of" instead of "in" 
      const days = []
      
      for (let dayIndex = 0; dayIndex < 7; dayIndex++) {  // checks day of the week
        const day = dayIndex + 1 + weekIndex * 7 - startDay;
        const isValid = day > 0 && day <= daysInMonth; // checks day in the month
  
        days.push({
          dayOfweek: dayIndex ,
          value: isValid ? day : " ",
      });
  }
  result.push({
      week: weekIndex + 1,
      days: days,
  });
    }
  
    return result;
  };
  const addCell = (existing, classString, value) => {
    const result = /* html */ `
          ${existing}
  
          <td class="${classString}">
              &nbsp;${value}&nbsp;
          </td>
      `;
  
    return result;
  };
  
  const createHtml = (data) => {
    let result = "";
  
    for (const { week , days } of  data ) {
      let inner = "";
      inner = addCell(inner, "table__cell table__cell_sidebar", `Week ${week}`);
  
      for (const { dayOfWeek, value } of days) {
        const isToday = new Date().getDate() === value;
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        const isAlternate = week % 2 === 0;
  
        let classString = "table__cell";
  
        if (isToday) classString = `${classString} table__cell_today`;
        if (isWeekend) classString = `${classString} table__cell_weekend`;
        if (isAlternate) classString = `${classString} table__cell_alternate`;
        inner = addCell(inner, classString, value);
      }
  
      result = `
              ${result}
              <tr>${inner}</tr>
          `;
    }
  
    return result;
  };
  
  // Only edit above
  
  const current = new Date();
  document.querySelector("[data-title]").innerText = `${
    MONTHS[current.getMonth()]
  } ${current.getFullYear()}`;
  
  const data = createData();
  document.querySelector('[data-content]').innerHTML = createHtml(data);
  
  
  