const localdb = {
    account:[{"usr":"111","pwd":"111","type":"Farm"}],
}
const debug=function(msg) {
    console.log(msg)
}
class localdbHelper {
    
    static queryAccount(usr, pwd) {
        for(let account of localdb.account) {
            if(account.usr===usr && account.pwd===pwd) {
                debug(JSON.stringify(account));
                return account;
            }
        }
        return null
    }
    
    static addAccount(acc) {
        for(let account of localdb.account) {
            if(account.usr===acc.usr) {
                return null;
            }
        }
        // const acc = {usr:usr,pwd:pwd,type:type};
        localdb.account.push(acc)
        debug(JSON.stringify(localdb));
        return acc;
    }

    static addFarmOperator(farmName, opt) {
        for(let account of localdb.account) {
            if(account.usr===farmName) {
                account.farm_operator = account.farm_operator || [];
                account.farm_operator.push({name: opt.name, desc: opt.desc})
                return account;
            }
        }
    }

    static listFarmOperator(farmName) {
        for(let account of localdb.account) {
            if(account.usr===farmName) {
                account.farm_operator = account.farm_operator || [];
                return account.farm_operator;
            }
        }
    }

    static addFarmAddress(farmName, opt) {
        for(let account of localdb.account) {
            if(account.usr===farmName) {
                account.farm_address = account.farm_address || [];
                account.farm_address.push({name: opt.name, addr: opt.addr})
                return account;
            }
        }
    }

    static listFarmAddress(farmName) {
        for(let account of localdb.account) {
            if(account.usr===farmName) {
                account.farm_address = account.farm_address || [];
                return account.farm_address;
            }
        }
    }

    static addFarmFarming(farmName, opt) {
        for(let account of localdb.account) {
            if(account.usr===farmName) {
                account.farm_farming = account.farm_farming || [];
                account.farm_farming.push({name: opt.name, desc: opt.desc})
                return account;
            }
        }
    }

    static listFarmFarming(farmName) {
        for(let account of localdb.account) {
            if(account.usr===farmName) {
                account.farm_farming = account.farm_farming || [];
                return account.farm_farming;
            }
        }
    }
}