import { useLanyardWS } from "use-lanyard";

const DISCORD_ID = "170987556765171714";
export function GetLanyardData() {
  const data = useLanyardWS(DISCORD_ID);
  return data;
}