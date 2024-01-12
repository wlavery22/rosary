

// export const getPrayers = () => {
// fetch("https://the-rosary-api.vercel.app/v1/today")
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
// }
// export const getPrayers = async (selection) => {
//   try {
//     const response = await fetch(
//       `https://the-rosary-api.vercel.app/${selection}`,
//     );
//     if (response.ok) {
//       const data = await response.json();
//         return {

//         };
      
//     } else if (response.status === 429) {
//       throw new Error('Too many requests. Try again later.');
//     } else {
//       throw new Error('GET request failed!');
//     }
//   } catch (error) {
//     console.error('ERROR:', error);
//     throw error;
//   }
// };

// export const getData = async () => {
//   try {
//     const data = await getDailyPrayer();
//     setPrayer(data);
//   } catch (error) {
//     console.error('ERROR:', error);
//   }
// };