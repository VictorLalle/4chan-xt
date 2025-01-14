// This file is needed in the build step, keep it .js
const archives = [{
  "uid": 3,
  "name": "4plebs",
  "domain": "archive.4plebs.org",
  "http": true,
  "https": true,
  "software": "foolfuuka",
  "boards": ["adv", "f", "hr", "mlpol", "mo", "o", "pol", "s4s", "sp", "tg", "trv", "tv", "x"],
  "files": ["adv", "f", "hr", "mlpol", "mo", "o", "pol", "s4s", "sp", "tg", "trv", "tv", "x"],
  "reports": true
}, {
  "uid": 10,
  "name": "warosu",
  "domain": "warosu.org",
  "http": false,
  "https": true,
  "software": "fuuka",
  "boards": ["3", "biz", "cgl", "ck", "diy", "fa", "ic", "jp", "lit", "sci", "vr", "vt"],
  "files": ["3", "biz", "cgl", "ck", "diy", "fa", "ic", "jp", "lit", "sci", "vr", "vt"],
  "search": ["biz", "cgl", "ck", "diy", "fa", "ic", "jp", "lit", "sci", "vr", "vt"]
}, {
  "uid": 23,
  "name": "Desuarchive",
  "domain": "desuarchive.org",
  "http": true,
  "https": true,
  "software": "foolfuuka",
  "boards": ["a", "aco", "an", "c", "cgl", "co", "d", "fit", "g", "his", "int", "k", "m", "mlp", "mu", "q", "qa", "r9k", "tg", "trash", "vr", "wsg"],
  "files": ["a", "aco", "an", "c", "cgl", "co", "d", "fit", "g", "his", "int", "k", "m", "mlp", "mu", "q", "qa", "r9k", "tg", "trash", "vr"],
  "reports": true
}, {
  "uid": 24,
  "name": "fireden.net",
  "domain": "boards.fireden.net",
  "http": false,
  "https": true,
  "software": "foolfuuka",
  "boards": ["cm", "co", "ic", "sci", "vip", "y"],
  "files": ["cm", "co", "ic", "sci", "vip", "y"],
  "search": ["cm", "co", "ic", "sci", "y"]
}, {
  "uid": 25,
  "name": "arch.b4k.co",
  "domain": "arch.b4k.co",
  "http": true,
  "https": true,
  "software": "foolfuuka",
  "boards": ["g", "mlp", "qb", "v", "vg", "vm", "vmg", "vp", "vrpg", "vst"],
  "files": ["qb", "v", "vg", "vm", "vmg", "vp", "vrpg", "vst"],
  "search": ["qb", "v", "vg", "vm", "vmg", "vp", "vrpg", "vst"]
}, {
  "uid": 29,
  "name": "Archived.Moe",
  "domain": "archived.moe",
  "http": true,
  "https": true,
  "software": "foolfuuka",
  "boards": ["3", "a", "aco", "adv", "an", "asp", "b", "bant", "biz", "c", "can", "cgl", "ck", "cm", "co", "cock", "con", "d", "diy", "e", "f", "fa", "fap", "fit", "fitlit", "g", "gd", "gif", "h", "hc", "his", "hm", "hr", "i", "ic", "int", "jp", "k", "lgbt", "lit", "m", "mlp", "mlpol", "mo", "mtv", "mu", "n", "news", "o", "out", "outsoc", "p", "po", "pol", "pw", "q", "qa", "qb", "qst", "r", "r9k", "s", "s4s", "sci", "soc", "sp", "spa", "t", "tg", "toy", "trash", "trv", "tv", "u", "v", "vg", "vint", "vip", "vm", "vmg", "vp", "vr", "vrpg", "vst", "vt", "w", "wg", "wsg", "wsr", "x", "xs", "y"],
  "files": ["can", "cock", "con", "fap", "fitlit", "gd", "mlpol", "mo", "mtv", "outsoc", "po", "q", "qb", "qst", "spa", "vint", "vip"],
  "search": ["aco", "adv", "an", "asp", "b", "bant", "biz", "c", "can", "cgl", "ck", "cm", "cock", "con", "d", "diy", "e", "f", "fap", "fitlit", "gd", "gif", "h", "hc", "his", "hm", "hr", "i", "ic", "lgbt", "lit", "mlpol", "mo", "mtv", "n", "news", "o", "out", "outsoc", "p", "po", "pw", "q", "qa", "qst", "r", "s", "soc", "spa", "trv", "u", "vint", "vip", "vrpg", "w", "wg", "wsg", "wsr", "x", "y"],
  "reports": true
}, {
  "uid": 30,
  "name": "TheBArchive.com",
  "domain": "thebarchive.com",
  "http": true,
  "https": true,
  "software": "foolfuuka",
  "boards": ["b", "bant"],
  "files": ["b", "bant"],
  "reports": true
}, {
  "uid": 31,
  "name": "Archive Of Sins",
  "domain": "archiveofsins.com",
  "http": true,
  "https": true,
  "software": "foolfuuka",
  "boards": ["h", "hc", "hm", "i", "lgbt", "r", "s", "soc", "t", "u"],
  "files": ["h", "hc", "hm", "i", "lgbt", "r", "s", "soc", "t", "u"],
  "reports": true
}, {
  "uid": 34,
  "name": "TokyoChronos",
  "domain": "www.tokyochronos.net",
  "http": false,
  "https": true,
  "software": "foolfuuka",
  "boards": ["c", "g", "jp", "mu", "vp", "vrpg", "vt"],
  "files": [],
  "reports": true
}, {
  "uid": 36,
  "name": "palanq.win",
  "domain": "archive.palanq.win",
  "http": false,
  "https": true,
  "software": "foolfuuka",
  "boards": ["bant", "c", "con", "e", "i", "n", "news", "out", "p", "pw", "qst", "toy", "vip", "vp", "vt", "w", "wg", "wsr"],
  "files": ["bant", "c", "e", "i", "n", "news", "out", "p", "pw", "qst", "toy", "vip", "vp", "vt", "w", "wg", "wsr"],
  "reports": true
}, {
  "uid": 37,
  "name": "Eientei",
  "domain": "eientei.xyz",
  "http": false,
  "https": true,
  "software": "Eientei",
  "boards": ["3", "i", "sci", "xs"],
  "files": ["3", "i", "sci", "xs"],
  "reports": true
}];

export default archives;
