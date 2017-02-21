var spreadDemo = (first, ...rest) => {return `Georgia Tech's last football championship was in ${first}, but they also won in ${rest}.`};
console.log(spreadDemo('1990', '1952', '1928', '1917'));