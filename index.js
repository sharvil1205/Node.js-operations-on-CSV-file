const csv = require('csv-parser')                                                                  // Import files
const fs = require('fs')
const result = [];
const final = [];                                                                                  // Declare arrays

fs.createReadStream('kepler_data.csv')
    .pipe(csv({}))
    .on('data', (data) => result.push(data))                                                        // Store all the data into result[] array
    .on('end', () =>{
        for(let i=0; i<result.length; i++)
        {
            if((result[i].koi_disposition == "CONFIRMED") && (result[i].koi_insol > 0.36 && result[i].koi_insol < 1.11) && (result[i].koi_prad < 1.6))                              
            final.push(
                result[i].kepoi_name,                                                                   
                result[i].kepler_name                                                               // If all the 3 given conditions are satidfied, store the kepoi_name and kepler_name into final[] array
            )
        }
        console.log('\nKepoi name and Kepler name of all the habitable planets matching the given 3 conditions: \n', final)
    });