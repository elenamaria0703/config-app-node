const yaml = require('js-yaml')
const fs = require('fs');

const writeDataToYml = function(data){
    let data_to_send={
        default: data,
        development: data,
        test: data,
        production: data
    }
    let yamlStr = yaml.safeDump(data_to_send);
    fs.writeFileSync('../configs/custom.yml', yamlStr, 'utf8');  
}


module.exports=writeDataToYml;