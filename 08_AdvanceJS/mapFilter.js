/* higher order function 
forEach
filter
map
sort
reduce
*/

const companies = [
    { name: 'Google', categories: 'Product Based', start: '1981', end: '1996' },
    { name: 'Microsoft', categories: 'Product Based', start: '1975', end: 'Present' },
    { name: 'Apple', categories: 'Product Based', start: '1976', end: 'Present' },
    { name: 'Facebook', categories: 'Social Media', start: '2004', end: 'Present' },
    { name: 'Instagram', categories: 'Social Media', start: '2005', end: 'Present' },
];

// for (let i = 0; i <= companies.length; i++){
//     console.log(companies[i])
// };

// companies.forEach((company,index)=>(console.log(company)));

// companies.forEach((comp,index)=>(console.log(comp,index)));

// filter 
const dummyAgeData = [25, 30, 22, 35, 28, 18, 40, 26, 32, 21];

// for (let i = 0;
//      i <= dummyAgeData.length;
//       i++){
//     if(dummyAgeData[i]>=30){
//         console.log(dummyAgeData[i])
//     }
// }

// const age20 = dummyAgeData.filter((age) => (age => 20));
// console.log(age20)

// const age30 = dummyAgeData.filter(function (age) {
//     if (age >= 30) {
//         return true
//     }
// })
// console.log(age30);

const socialMediaCompanies = companies.filter((social => ( social.categories == 'Social Media' )));
console.log(socialMediaCompanies);

const sb = companies.filter(function (product) {
    if (product.categories == 'Product Based') {
        console.log(product)
    }
})