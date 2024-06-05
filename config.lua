Config = {}

Config.Rewards = {
    ["revive"] = function(id)
        print("Revived Player With ID: " .. id)
        TriggerClientEvent("esx_ambulancejob:revive", tonumber(id))
    end
}
