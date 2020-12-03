const yaml = require('js-yaml')
const fs = require('fs');

const writeDataToYml = function(data){
    let yamlStr = yaml.safeDump(data);
    fs.writeFileSync('config.yml', yamlStr, 'utf8');  
}

module.exports=writeDataToYml;
