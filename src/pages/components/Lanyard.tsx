import { GetLanyardData } from "../../hooks/LanyardData";

const Lanyard = () => {
  const discordActivity = GetLanyardData();
  try {
    if ((discordActivity?.["activities"][1]["type"]) == 2) {
      // spotify
      let artists = String(discordActivity?.["activities"][1]["state"]).replaceAll(";", ",");
      let title = String(discordActivity?.["activities"][1]["details"]);
      let albumCover = `https://i.scdn.co/image/${discordActivity?.["activities"][1]["assets"]?.["large_image"].replace("spotify:", "")}`
      
      return (
        <div className="discord-activity">
          <img className="activity-thumbnail" src={albumCover} alt="" />
          <span className="activity-details">
            <p>{title}</p>
            <p className="ad-sub">by: {artists}</p>
          </span>
          <div className='hover'>
            <p>omg this is what im doing!</p>
          </div>
          <div>{}</div>
        </div>
      );
    } else if ((discordActivity?.["activities"][1]["type"]) == 0) {
      // acivity?
      let activityName = String(discordActivity?.["activities"][1]["name"]);
      let activityDetails = String(discordActivity?.["activities"][1]["details"]);
      let applicationID = discordActivity?.["activities"][1]["application_id"]
      let imageID = discordActivity?.["activities"][1]["assets"]?.large_image;
  
      if (activityDetails === "undefined") {
        activityName = "Playing " + activityName;
        activityDetails = "idk what happening..";
        return (
          <div className="discord-activity">
            <span className="activity-details">
              <p>{activityName}</p>
              <p className="ad-sub">{activityDetails}</p>
            </span>
            <div className='hover'>
              <p>omg this is what im doing!</p>
            </div>
          </div>
        )
      }
      return (
        <div className="discord-activity">
          <img className="activity-thumbnail" src={`https://cdn.discordapp.com/app-assets/${applicationID}/${imageID}.png`} alt="" />
          <span className="activity-details">
            <p>{activityName}</p>
            <p className="ad-sub">{activityDetails}</p>
          </span>
          <div className='hover'>
            <p>omg this is what im doing!</p>
          </div>
        </div>
      )
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

export default Lanyard;