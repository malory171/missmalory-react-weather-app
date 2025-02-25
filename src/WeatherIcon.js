import React from "react";
import WiDaySunny from "@meronex/icons/wi/WiDaySunny";
import WiNightClear from "@meronex/icons/wi/WiNightClear";
import WiDaySunnyOvercast from "@meronex/icons/wi/WiDaySunnyOvercast";
import WiNightAltPartlyCloudy from "@meronex/icons/wi/WiNightAltPartlyCloudy";
import WiDayCloudy from "@meronex/icons/wi/WiDayCloudy";
import WiNightAltCloudy from "@meronex/icons/wi/WiNightAltCloudy";
import WiCloudy from "@meronex/icons/wi/WiCloudy";
import WiDayRainMix from "@meronex/icons/wi/WiDayRainMix";
import WiNightAltShowers from "@meronex/icons/wi/WiNightAltShowers";
import WiShowers from "@meronex/icons/wi/WiShowers";
import WiDayStormShowers from "@meronex/icons/wi/WiDayStormShowers";
import WiNightAltStormShowers from "@meronex/icons/wi/WiNightAltStormShowers";
import WiDaySnow from "@meronex/icons/wi/WiDaySnow";
import WiNightAltSnowWind from "@meronex/icons/wi/WiNightAltSnowWind";
import WiDayFog from "@meronex/icons/wi/WiDayFog";
import WiNightFog from "@meronex/icons/wi/WiNightFog";

export default function WeatherIcon(props) {
  console.log(props.code);

  const codeMapping = {
    "clear-sky-day": WiDaySunny,
    "clear-sky-night": WiNightClear,
    "few-clouds-day": WiDaySunnyOvercast,
    "few-clouds-night": WiNightAltPartlyCloudy,
    "scattered-clouds-day": WiDayCloudy,
    "scattered-clouds-night": WiNightAltCloudy,
    "broken-clouds-day": WiCloudy,
    "broken-clouds-night": WiCloudy,
    "shower-rain-day": WiDayRainMix,
    "shower-rain-night": WiNightAltShowers,
    "rain-day": WiShowers,
    "rain-night": WiShowers,
    "thunderstorm-day": WiDayStormShowers,
    "thunderstorm-night": WiNightAltStormShowers,
    "snow-day": WiDaySnow,
    "snow-night": WiNightAltSnowWind,
    "mist-day": WiDayFog,
    "mist-night": WiNightFog,
  };

  const IconComponent = codeMapping[props.code];
  return (
    <div className="WeatherIcon">
      <IconComponent size={props.size} />
    </div>
  );
}
