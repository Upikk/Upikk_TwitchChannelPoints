function OnPoints(id, reward)
    if Config.Rewards[reward] then
        Config.Rewards[reward](id)
    else
        print("Reward not found: " .. reward)
    end
end

exports("OnPoints", OnPoints)
