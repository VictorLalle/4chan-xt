import { E, g } from "../../globals/globals";

export default function generatePostInfoHtml(
  ID, o, subject, capcode, email, name, tripcode, pass, capcodeLC, capcodePlural, staticPath, gifIcon,
  capcodeDescription, uniqueID, flag, flagCode, flagCodeTroll, dateUTC, dateText, postLink, quoteLink, boardID,
  threadID,
) {
  // Start
  let output = `<div class="postInfo desktop" id="pi${ID}">`;

  output += `<input type="checkbox" name="${ID}" value="delete">`;

  if (!o.isReply || boardID === "f" || subject) output += `<span class="subject">${E(subject || "")}</span>`;
  output += `<span class="nameBlock${capcode ? ` capcode${capcode}` : ''}">`;
  if (email) output += `<a href="mailto:${encodeURIComponent(email).replace(/%40/g, "@")}" class="useremail">`;
  output += `<span class="name ${capcode ? E(capcode) : ''}">${E(name)}</span>`;
  if (tripcode) output += ` <span class="postertrip">${E(tripcode)}</span>`;
  if (pass) output += ` <span title="Pass user since ${E(pass)}" class="n-pu"></span>`;
  if (capcode) {
    output +=
      ` <strong class="capcode hand id_${E(capcodeLC)}" title="Highlight posts by ${E(capcodePlural)}">## ${E(capcode)}</strong>`;
  }
  if (email) output += '</a>';
  if (!(boardID === "f" && !o.isReply || capcodeDescription)) output += ' ';
  if (capcodeDescription) {
    output +=
      ` <img src="${staticPath}${capcodeLC}icon${gifIcon}" alt="${E(capcode)} Icon" title="This user is ${E(capcodeDescription)}." class="identityIcon retina">`;
  }
  if (!(uniqueID && !capcode)) {
    output +=
      `<span class="posteruid id_${E(uniqueID)}">(ID: <span class="hand" title="Highlight posts by this ID">${E(uniqueID)}</span>)</span>`;
  }
  if (flagCode) output += ` <span title="${flag}" class="flag flag-${flagCode.toLowerCase()}"></span>`;
  if (flagCodeTroll) output += ` <span title="${flag}" class="bfl bfl-${flagCodeTroll.toLowerCase()}"></span>`;
  output += `</span>
  <span class="dateTime" data-utc="${dateUTC}">${E(dateText)}</span>
  <span class="postNum${!(boardID === "f" && !o.isReply) ? ' desktop' : ''}">
    <a href="${postLink}" title="Link to this post">No.</a>
    <a href="${quoteLink}" title="Reply to this post">${ID}</a>`;

  if (o.isSticky) {
    output +=
      ` <img src="${staticPath}sticky${gifIcon}" alt="Sticky" title="Sticky"` +
      (boardID === "f" ? ' style="height: 18px; width: 18px;"' : ' class="stickyIcon retina"') + '>';
  }
  if (o.isClosed && !o.isArchived) {
    output +=
      ` <img src="${staticPath}closed${gifIcon}" alt="Closed" title="Closed"${boardID === "f" ? ' style="height: 18px; width: 18px;"' : ' class="closedIcon retina"'}>`;
  }
  if (o.isArchived) {
    output +=
      ` <img src="${staticPath}archived${gifIcon}" alt="Archived" title="Archived" class="archivedIcon retina">`;
  } else {
    output += ` <img src="${staticPath}archived${gifIcon}" alt="Archived" title="Archived" class="archivedIcon retina">`;
  }
  if (!o.isReply && g.VIEW === "index") output += ` &nbsp; <span>[<a href="/${boardID}/thread/${threadID}" class="replylink">Reply</a>]</span>`;
  output += '</span></div>';

  return output;
}
