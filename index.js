/*
    Tokens lb.kstream.org
    3deda4e4566da958779d69fccd9e6329
    805384f96e55c15e3eb7be0e6d616a36
    0132859690ab23b715461893914849e8
    7aa5b671dd0f02ece58a23c2d1991916
    f084b0de09125af8f85f302e27a0bb64
    db85ea8a0c959af662aed48cf011ff87
    9d8ba1da9c2a41dab0af237afe9ed6d9

*/
const $channelOptions = document.querySelector("select#channel");
const $titleCard = document.querySelector("div.titleChannel");
const $selectComponent = document.querySelector("select#channel");
const $channelInput = document.querySelector(".channelurl");

// Events
window.addEventListener("load", populateSelect);
$selectComponent.addEventListener("change", handleChangeSelect);

// functionalities
function populateSelect() {
  let htmlOptions = createOption(
    { value: "default", content: "Lista de canais" },
    true
  );

  const categoryOfChannels = Object.keys(listChannel);

  categoryOfChannels.forEach((category) => {
    const channelsInCategory = listChannel[category];

    htmlOptions += createOption(
      { value: "default", content: `---- ${category} ----` },
      true
    );

    const channelsKey = Object.keys(channelsInCategory);

    channelsKey.forEach((channel) => {
      htmlOptions += createOption({
        value: channel,
        content: channelsInCategory[channel].name,
      });
    });
  });

  $channelOptions.innerHTML += htmlOptions;
}

function createOption({ value, content }, isDisabled = false) {
  return `
    <option value="${value}" ${isDisabled && "disabled"}>
      ${content}
    </option>
  `;
}

function handleChangeSelect(event) {
  const selectedValue = event.target.value;

  const { name, url } = getDataOfChannel(selectedValue);

  $titleCard.innerHTML = name;
  $channelInput.value = url;
}

function getDataOfChannel(chanelName) {
  const defaultChannel = {
    name: "Padrão",
    url: "https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8",
  };

  const channels = Object.keys(listChannel).reduce((finalMap, values) => {
    finalMap = { ...finalMap, ...listChannel[values] };
    return finalMap;
  }, {});

  const selectedChannel = channels[chanelName];

  return selectedChannel ? selectedChannel : defaultChannel;
}
