import { E } from "../../globals/globals";

export default function generateFileHtml(file, ID, boardID, fileURL, shortFilename, fileThumb, o, staticPath, gifIcon) {
  if (file) {
    let output = `<div class="file" id="f${ID}">`;
    if (boardID === "f") {
      output += `<div class="fileInfo" data-md5="${file.MD5}"><span class="fileText" id="fT${ID}">
      File:
      <a data-width="${file.width}" data-height="${file.height}" href="${fileURL}" target="_blank">${E(file.name)}</a>
      -(${file.size}, ${file.dimensions}${file.tag ? ', ' + file.tag : ''}})
    </span></div>`;
    } else {
      output += `<div class="fileText" id="fT${ID}"${file.isSpoiler ? ` title="${E(file.name)}"` : ''}>
      File:
      <a${file.name === shortFilename || file.isSpoiler ? '' : ' title=' + E(file.name)} href="${fileURL}" target="_blank">
        ${file.isSpoiler ? 'Spoiler Image' : shortFilename}
      </a>
      (${file.size}, ${file.dimensions || "PDF"})
    </div>
    <a class="fileThumb${file.isSpoiler ? ' imgspoiler' : ''}" href="${fileURL}" target="_blank"${file.hasDownscale ? ' data-m' : ''}>
      <img
        src="${fileThumb}"
        alt="${file.size}"
        data-md5="${file.MD5}"
        style="height: ${file.isSpoiler ? '100' : file.theight}px; width: ${file.isSpoiler ? 100 : file.twidth}px;"
        loading="lazy"
      >
    </a>`;
    }
    return output + '</div>';
  } else if (o.fileDeleted) {
    return `<div class="file" id="f${ID}">
      <span class="fileThumb">
        <img src="${staticPath}filedeleted-res${gifIcon}" alt="File deleted." class="fileDeletedRes retina">
      </span>
    </div>`;
  }
  return '';
}
