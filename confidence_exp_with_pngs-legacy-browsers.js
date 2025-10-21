/********************************* 
 * Confidence_Exp_With_Pngs *
 *********************************/


// store info about the experiment session:
let expName = 'confidence_exp_with_pngs';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'

function replText(text, el, repl = '_') {
    let te = String(text);
    if (te.includes(el)) {
        return te.replace(new RegExp(el,'g'), repl);
    } else {
        return te;
    }
}


function makeString(arr, delim = ',', repl = '_') {

    let attrSet = new Set();
    for (let i = 0; i < arr.length; i++) {
        for(let k of Object.keys(arr[i])) {
            attrSet.add(k);
        }
    }
    let attr = [...attrSet];

    attr.sort();

    let lineList = [attr.join(delim) + '\n'];

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < attr.length; j++){
            if(!Object.hasOwn(arr[i], attr[j])){
                arr[i][attr[j]] = '';
            }
        }
    }

    let replFun = (i) => replText(replText(i, delim, repl), '\n', repl + repl);

    for (let i = 0; i < arr.length; ++i) {
        for(let j = 0; j < attr.length; j++){
            if(!Object.hasOwn(arr[i], attr[j])){
                arr[i][attr[j]] = '';
            }
        }
      let dataList = attr.map((k) => replFun(arr[i][k]));
      let dataStr = dataList.join(delim);
      lineList.push(dataStr + '\n');
    }

    return lineList.join('');
    
};
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcome_instructionRoutineBegin());
flowScheduler.add(welcome_instructionRoutineEachFrame());
flowScheduler.add(welcome_instructionRoutineEnd());
const condition_blockLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(condition_blockLoopBegin(condition_blockLoopScheduler));
flowScheduler.add(condition_blockLoopScheduler);
flowScheduler.add(condition_blockLoopEnd);










flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Спасибо за участие!', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Спасибо за участие!', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'block_settings.xlsx', 'path': 'block_settings.xlsx'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'mask/Gaussian white noise.png', 'path': 'mask/Gaussian white noise.png'},
    {'name': 'circle__002F39.png', 'path': 'circle__002F39.png'},
    {'name': 'circle__3D1E28.png', 'path': 'circle__3D1E28.png'},
    {'name': 'circle__3E1E1F.png', 'path': 'circle__3E1E1F.png'},
    {'name': 'circle__152A41.png', 'path': 'circle__152A41.png'},
    {'name': 'circle__32213A.png', 'path': 'circle__32213A.png'},
    {'name': 'circle__063126.png', 'path': 'circle__063126.png'},
    {'name': 'circle__232642.png', 'path': 'circle__232642.png'},
    {'name': 'circle__322807.png', 'path': 'circle__322807.png'},
    {'name': 'circle-large-donut__002F39.png', 'path': 'circle-large-donut__002F39.png'},
    {'name': 'circle-large-donut__3D1E28.png', 'path': 'circle-large-donut__3D1E28.png'},
    {'name': 'circle-large-donut__3E1E1F.png', 'path': 'circle-large-donut__3E1E1F.png'},
    {'name': 'circle-large-donut__152A41.png', 'path': 'circle-large-donut__152A41.png'},
    {'name': 'circle-large-donut__32213A.png', 'path': 'circle-large-donut__32213A.png'},
    {'name': 'circle-large-donut__063126.png', 'path': 'circle-large-donut__063126.png'},
    {'name': 'circle-large-donut__232642.png', 'path': 'circle-large-donut__232642.png'},
    {'name': 'circle-large-donut__322807.png', 'path': 'circle-large-donut__322807.png'},
    {'name': 'circle-with-circle-cutout__002F39.png', 'path': 'circle-with-circle-cutout__002F39.png'},
    {'name': 'circle-with-circle-cutout__3D1E28.png', 'path': 'circle-with-circle-cutout__3D1E28.png'},
    {'name': 'circle-with-circle-cutout__3E1E1F.png', 'path': 'circle-with-circle-cutout__3E1E1F.png'},
    {'name': 'circle-with-circle-cutout__152A41.png', 'path': 'circle-with-circle-cutout__152A41.png'},
    {'name': 'circle-with-circle-cutout__32213A.png', 'path': 'circle-with-circle-cutout__32213A.png'},
    {'name': 'circle-with-circle-cutout__063126.png', 'path': 'circle-with-circle-cutout__063126.png'},
    {'name': 'circle-with-circle-cutout__232642.png', 'path': 'circle-with-circle-cutout__232642.png'},
    {'name': 'circle-with-circle-cutout__322807.png', 'path': 'circle-with-circle-cutout__322807.png'},
    {'name': 'diamond-thin-plus-shape__002F39.png', 'path': 'diamond-thin-plus-shape__002F39.png'},
    {'name': 'diamond-thin-plus-shape__3D1E28.png', 'path': 'diamond-thin-plus-shape__3D1E28.png'},
    {'name': 'diamond-thin-plus-shape__3E1E1F.png', 'path': 'diamond-thin-plus-shape__3E1E1F.png'},
    {'name': 'diamond-thin-plus-shape__152A41.png', 'path': 'diamond-thin-plus-shape__152A41.png'},
    {'name': 'diamond-thin-plus-shape__32213A.png', 'path': 'diamond-thin-plus-shape__32213A.png'},
    {'name': 'diamond-thin-plus-shape__063126.png', 'path': 'diamond-thin-plus-shape__063126.png'},
    {'name': 'diamond-thin-plus-shape__232642.png', 'path': 'diamond-thin-plus-shape__232642.png'},
    {'name': 'diamond-thin-plus-shape__322807.png', 'path': 'diamond-thin-plus-shape__322807.png'},
    {'name': 'rectangle-third-plus-shape__002F39.png', 'path': 'rectangle-third-plus-shape__002F39.png'},
    {'name': 'rectangle-third-plus-shape__3D1E28.png', 'path': 'rectangle-third-plus-shape__3D1E28.png'},
    {'name': 'rectangle-third-plus-shape__3E1E1F.png', 'path': 'rectangle-third-plus-shape__3E1E1F.png'},
    {'name': 'rectangle-third-plus-shape__152A41.png', 'path': 'rectangle-third-plus-shape__152A41.png'},
    {'name': 'rectangle-third-plus-shape__32213A.png', 'path': 'rectangle-third-plus-shape__32213A.png'},
    {'name': 'rectangle-third-plus-shape__063126.png', 'path': 'rectangle-third-plus-shape__063126.png'},
    {'name': 'rectangle-third-plus-shape__232642.png', 'path': 'rectangle-third-plus-shape__232642.png'},
    {'name': 'rectangle-third-plus-shape__322807.png', 'path': 'rectangle-third-plus-shape__322807.png'},
    {'name': 'shape-3-sided-triangle__002F39.png', 'path': 'shape-3-sided-triangle__002F39.png'},
    {'name': 'shape-3-sided-triangle__3D1E28.png', 'path': 'shape-3-sided-triangle__3D1E28.png'},
    {'name': 'shape-3-sided-triangle__3E1E1F.png', 'path': 'shape-3-sided-triangle__3E1E1F.png'},
    {'name': 'shape-3-sided-triangle__152A41.png', 'path': 'shape-3-sided-triangle__152A41.png'},
    {'name': 'shape-3-sided-triangle__32213A.png', 'path': 'shape-3-sided-triangle__32213A.png'},
    {'name': 'shape-3-sided-triangle__063126.png', 'path': 'shape-3-sided-triangle__063126.png'},
    {'name': 'shape-3-sided-triangle__232642.png', 'path': 'shape-3-sided-triangle__232642.png'},
    {'name': 'shape-3-sided-triangle__322807.png', 'path': 'shape-3-sided-triangle__322807.png'},
    {'name': 'shape-5-sided-pentagon__002F39.png', 'path': 'shape-5-sided-pentagon__002F39.png'},
    {'name': 'shape-5-sided-pentagon__3D1E28.png', 'path': 'shape-5-sided-pentagon__3D1E28.png'},
    {'name': 'shape-5-sided-pentagon__3E1E1F.png', 'path': 'shape-5-sided-pentagon__3E1E1F.png'},
    {'name': 'shape-5-sided-pentagon__152A41.png', 'path': 'shape-5-sided-pentagon__152A41.png'},
    {'name': 'shape-5-sided-pentagon__32213A.png', 'path': 'shape-5-sided-pentagon__32213A.png'},
    {'name': 'shape-5-sided-pentagon__063126.png', 'path': 'shape-5-sided-pentagon__063126.png'},
    {'name': 'shape-5-sided-pentagon__232642.png', 'path': 'shape-5-sided-pentagon__232642.png'},
    {'name': 'shape-5-sided-pentagon__322807.png', 'path': 'shape-5-sided-pentagon__322807.png'},
    {'name': 'shape-8-sided-octagon__002F39.png', 'path': 'shape-8-sided-octagon__002F39.png'},
    {'name': 'shape-8-sided-octagon__3D1E28.png', 'path': 'shape-8-sided-octagon__3D1E28.png'},
    {'name': 'shape-8-sided-octagon__3E1E1F.png', 'path': 'shape-8-sided-octagon__3E1E1F.png'},
    {'name': 'shape-8-sided-octagon__152A41.png', 'path': 'shape-8-sided-octagon__152A41.png'},
    {'name': 'shape-8-sided-octagon__32213A.png', 'path': 'shape-8-sided-octagon__32213A.png'},
    {'name': 'shape-8-sided-octagon__063126.png', 'path': 'shape-8-sided-octagon__063126.png'},
    {'name': 'shape-8-sided-octagon__232642.png', 'path': 'shape-8-sided-octagon__232642.png'},
    {'name': 'shape-8-sided-octagon__322807.png', 'path': 'shape-8-sided-octagon__322807.png'},
    {'name': 'shape-heart__002F39.png', 'path': 'shape-heart__002F39.png'},
    {'name': 'shape-heart__3D1E28.png', 'path': 'shape-heart__3D1E28.png'},
    {'name': 'shape-heart__3E1E1F.png', 'path': 'shape-heart__3E1E1F.png'},
    {'name': 'shape-heart__152A41.png', 'path': 'shape-heart__152A41.png'},
    {'name': 'shape-heart__32213A.png', 'path': 'shape-heart__32213A.png'},
    {'name': 'shape-heart__063126.png', 'path': 'shape-heart__063126.png'},
    {'name': 'shape-heart__232642.png', 'path': 'shape-heart__232642.png'},
    {'name': 'shape-heart__322807.png', 'path': 'shape-heart__322807.png'},
    {'name': 'square-large__002F39.png', 'path': 'square-large__002F39.png'},
    {'name': 'square-large__3D1E28.png', 'path': 'square-large__3D1E28.png'},
    {'name': 'square-large__3E1E1F.png', 'path': 'square-large__3E1E1F.png'},
    {'name': 'square-large__152A41.png', 'path': 'square-large__152A41.png'},
    {'name': 'square-large__32213A.png', 'path': 'square-large__32213A.png'},
    {'name': 'square-large__063126.png', 'path': 'square-large__063126.png'},
    {'name': 'square-large__232642.png', 'path': 'square-large__232642.png'},
    {'name': 'square-large__322807.png', 'path': 'square-large__322807.png'},
    {'name': 'images_list.txt', 'path': 'images_list.txt'},
    {'name': 'colored_file_list.csv', 'path': 'colored_file_list.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var welcome_instructionClock;
var instruction_welcome;
var go_to_blocks;
var instructionClock;
var go_to_trials;
var instruction_text_block;
var fixation_crossClock;
var fix_cross;
var encodingClock;
var image_1;
var image_2;
var image_3;
var image_4;
var image_5;
var maintenanceClock;
var mask;
var retrievalClock;
var image_left;
var image_right;
var image_center;
var retrieval_answer;
var confidenceClock;
var confidence_text;
var confidence_answer;
var pauseClock;
var text_2;
var pause_next;
var endClock;
var end_block;
var end_experiment;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome_instruction"
  welcome_instructionClock = new util.Clock();
  instruction_welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_welcome',
    text: 'Здравствуйте, вам предстоит пройти эксперимент... Он будет состоять из... этапов. Вы сможете делать паузы между этапами, но, пожалуйста, не отвлекайтесь во время прохождения этапа.\n\nНажмите ПРОБЕЛ, чтобы перейти к инструкции для первого этапа.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  go_to_blocks = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  go_to_trials = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instruction_text_block = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_block',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "fixation_cross"
  fixation_crossClock = new util.Clock();
  fix_cross = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix_cross', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.5, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "encoding"
  encodingClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  /*
  // --- SETTINGS ---
  const MANIFEST_TXT = "images_list.txt";       // one PNG per line
  const FALLBACK_CSV = "colored_file_list.csv"; // CSV with first col "filename"
  
  // --- Small helpers (no external imports) ---
  function _bomStrip(s) {
    // remove UTF-8 BOM if present
    return (s && s.charCodeAt(0) === 0xFEFF) ? s.slice(1) : s;
  }
  
  function _isPng(name) {
    return typeof name === "string" && name.trim().toLowerCase().endsWith(".png");
  }
  
  // Fisher–Yates in-place shuffle clone, returns new array
  function _shuffledCopy(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      // const j = (Math.random() * (i + 1)) | 0;
      const j = util.randint(0, i + 1); 
      const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }
  
  function _sampleN(arr, n) {
    if (n <= 0) return [];
    if (n >= arr.length) return arr.slice();
    return _shuffledCopy(arr).slice(0, n);
  }
  
  function _choice(arr) {
    if (!arr || arr.length === 0) throw new Error("Cannot choose from empty array.");
    //const idx = (Math.random() * arr.length) | 0;
    const idx = util.randint(0, arr.length);
    return arr[idx];
  }
  
  // --- Resource loading (PsychoJS server manager) ---
  async function _readTextResource(filename) {
    // Make sure file is listed in “Additional Resources”
    const res = await psychoJS.serverManager.getResource(filename);
    // res is a Blob in modern PsychoJS; use .text() to read it
    if (!res) throw new Error(`Resource not found: ${filename}`);
    const txt = await res.text();
    return _bomStrip(txt);
  }
  
  function _parseTxtToPngs(text) {
    return text
      .split(/\r?\n/)
      .map(ln => ln.trim())
      .filter(ln => ln && _isPng(ln));
  }
  
  function _parseCsvFirstColumnToPngs(text) {
    const lines = text.split(/\r?\n/);
    const out = [];
    for (let i = 0; i < lines.length; i++) {
      const raw = lines[i].trim();
      if (!raw) continue;
      const parts = raw.split(",");
      if (i === 0 && parts[0] && parts[0].trim().toLowerCase() === "filename") continue;
      const name = (parts[0] || "").trim();
      if (_isPng(name)) out.push(name);
    }
    return out;
  }
  
  // --- Public API (mirrors your Python) ---
  let _catalog_images = []; // filled by initImageCatalog()
  /*
  async function load_filenames() {
    // Try TXT first
    try {
      const txt = await _readTextResource(MANIFEST_TXT);
      const files = _parseTxtToPngs(txt);
      if (files && files.length > 0) return files;
    } catch (e) {
      // ignore and try CSV
    }
  
    // Try CSV fallback
    try {
      const csv = await _readTextResource(FALLBACK_CSV);
      const files = _parseCsvFirstColumnToPngs(csv);
      if (files && files.length > 0) return files;
    } catch (e) {
      // ignore; will throw below
    }
  
    throw new Error(
      "No image list found. Create 'images_list.txt' (one PNG per line) in the experiment folder " +
      "or place 'colored_file_list.csv' with a 'filename' header."
    );
  }
  */
  /*
  async function load_filenames() {
    try {
      const txt = await _readTextResource(MANIFEST_TXT);
      const files = _parseTxtToPngs(txt);
      console.log(`[manifest] ${MANIFEST_TXT} parsed ${files.length} png(s)`);
      if (files && files.length > 0) return files;
    } catch (e) {
      console.warn(`Could not read ${MANIFEST_TXT}:`, e);
    }
  
    try {
      const csv = await _readTextResource(FALLBACK_CSV);
      const files = _parseCsvFirstColumnToPngs(csv);
      console.log(`[manifest] ${FALLBACK_CSV} parsed ${files.length} png(s)`);
      if (files && files.length > 0) return files;
      console.warn(`${FALLBACK_CSV} loaded but no .pngs were parsed (check delimiter/header).`);
    } catch (e) {
      console.warn(`Could not read ${FALLBACK_CSV}:`, e);
    }
  
    throw new Error(
      "No image list found. Create 'images_list.txt' (one PNG per line) in the experiment folder " +
      "or place 'colored_file_list.csv' with a 'filename' header."
    );
  }
  
  // Call this ONCE at startup (e.g., Begin Experiment): await initImageCatalog();
  async function initImageCatalog() {
    _catalog_images = await load_filenames();
    if (_catalog_images.length < 5) {
      throw new Error("Need at least 5 PNG filenames in your list.");
    }
  }
  
  function pick_five_images() {
    // Because filenames encode unique (shape,color) pairs,
    // sampling without replacement ensures no pair repeats.
    return _sampleN(_catalog_images, 5);
  }
  
  function pick_foil(not_in_list) {
    const blacklist = new Set(not_in_list || []);
    const candidates = _catalog_images.filter(f => !blacklist.has(f));
    if (candidates.length === 0) {
      throw new Error("No available foil images (catalog too small vs. shown set).");
    }
    return _choice(candidates);
  }
  
  // --- Retrieval state (persist across routines), mirroring your Python ---
  let target_idx = null;
  let target_image = null;
  let foil_image = null;
  
  // Display control for retrieval routine
  let image_left_file = null;
  let image_right_file = null;
  let image_center_file = null;
  
  let left_opacity = 0.0;
  let right_opacity = 0.0;
  let center_opacity = 0.0;
  
  // For scoring / logging
  let correct_side = null;      // 'left' or 'right' for 2-AFC
  let center_is_target = null;  // true/false for 1-AFC
  
  // make the helpers globally visible to later routines
  Object.assign(window, {
    pick_five_images,
    pick_foil,
    initImageCatalog
  });
  
  // load the catalog once before any trial starts
  await initImageCatalog();
  */
  // --- SETTINGS ---
  const MANIFEST_TXT = "images_list.txt";       // one PNG per line
  const FALLBACK_CSV = "colored_file_list.csv"; // CSV with first col "filename"
  
  // --- Small helpers (no external imports) ---
  function _bomStrip(s) {
    // remove UTF-8 BOM if present
    return (s && s.charCodeAt(0) === 0xFEFF) ? s.slice(1) : s;
  }
  
  function _isPng(name) {
    return typeof name === "string" && name.trim().toLowerCase().endsWith(".png");
  }
  
  // Fisher–Yates in-place shuffle clone, returns new array
  function _shuffledCopy(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = util.randint(0, i + 1);
      const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }
  
  function _sampleN(arr, n) {
    if (n <= 0) return [];
    if (n >= arr.length) return arr.slice();
    return _shuffledCopy(arr).slice(0, n);
  }
  
  function _choice(arr) {
    if (!arr || arr.length === 0) throw new Error("Cannot choose from empty array.");
    const idx = util.randint(0, arr.length);
    return arr[idx];
  }
  
  // --- Resource loading (robust across PsychoJS versions/shapes) ---
  async function _readTextResource(filename) {
    // Make sure the file is listed in “Additional resources”
    const res = await psychoJS.serverManager.getResource(filename);
    if (!res) throw new Error(`Resource not found: ${filename}`);
  
    // Already a plain string?
    if (typeof res === "string") return _bomStrip(res);
  
    // Blob/Response-like with .text()
    if (res && typeof res.text === "function") {
      const txt = await res.text();
      return _bomStrip(txt);
    }
  
    // Wrapper object { data: ... }
    if (res && res.data !== undefined) {
      const d = res.data;
      if (typeof d === "string") return _bomStrip(d);
      if (d && typeof d.text === "function") {
        const txt = await d.text();
        return _bomStrip(txt);
      }
      if (d instanceof ArrayBuffer || d instanceof Uint8Array) {
        const buf = d instanceof Uint8Array ? d : new Uint8Array(d);
        const txt = new TextDecoder("utf-8").decode(buf);
        return _bomStrip(txt);
      }
    }
  
    // Raw buffers sometimes come directly
    if (res instanceof ArrayBuffer || res instanceof Uint8Array) {
      const buf = res instanceof Uint8Array ? res : new Uint8Array(res);
      const txt = new TextDecoder("utf-8").decode(buf);
      return _bomStrip(txt);
    }
  
    // Last resort
    const maybe = String(res);
    if (maybe && maybe.length) return _bomStrip(maybe);
  
    throw new Error(`Cannot read text from resource: ${filename} (unexpected shape)`);
  }
  
  function _parseTxtToPngs(text) {
    return text
      .split(/\r?\n/)
      .map(ln => ln.trim())
      .filter(ln => ln && _isPng(ln));
  }
  
  function _parseCsvFirstColumnToPngs(text) {
    const lines = text.split(/\r?\n/);
    const out = [];
    for (let i = 0; i < lines.length; i++) {
      const raw = lines[i].trim();
      if (!raw) continue;
      const parts = raw.split(","); // if your CSV is ; or \t, col0 still holds the whole string → endsWith(".png") still works
      if (i === 0 && parts[0] && parts[0].trim().toLowerCase() === "filename") continue;
      const name = (parts[0] || "").trim();
      if (_isPng(name)) out.push(name);
    }
    return out;
  }
  
  // Optional: fallback if both manifests fail — scan preloaded resources for .png files
  function _fromPreloadedPngs() {
    const out = [];
    const resMap = psychoJS.serverManager && psychoJS.serverManager.resources;
    if (!resMap) return out;
  
    // Map-like
    if (typeof resMap.forEach === "function") {
      resMap.forEach((_, key) => { if (_isPng(key)) out.push(key); });
      return out;
    }
    // Plain object
    if (typeof resMap === "object") {
      for (const key in resMap) {
        if (_isPng(key)) out.push(key);
      }
    }
    return out;
  }
  
  // --- Public API (mirrors your Python) ---
  let _catalog_images = []; // filled by initImageCatalog()
  
  async function load_filenames() {
    try {
      const txt = await _readTextResource(MANIFEST_TXT);
      const files = _parseTxtToPngs(txt);
      console.log(`[manifest] ${MANIFEST_TXT} → ${files.length} png(s)`);
      if (files.length > 0) return files;
    } catch (e) {
      console.warn(`Could not read ${MANIFEST_TXT}:`, e);
    }
  
    try {
      const csv = await _readTextResource(FALLBACK_CSV);
      const files = _parseCsvFirstColumnToPngs(csv);
      console.log(`[manifest] ${FALLBACK_CSV} → ${files.length} png(s)`);
      if (files.length > 0) return files;
      console.warn(`${FALLBACK_CSV} loaded but produced 0 pngs. Check delimiter/header.`);
    } catch (e) {
      console.warn(`Could not read ${FALLBACK_CSV}:`, e);
    }
  
    // Optional fallback: inspect preloaded resource names
    const fallback = _fromPreloadedPngs();
    if (fallback.length > 0) {
      console.warn(`Manifest missing; falling back to ${fallback.length} preloaded PNG(s).`);
      return fallback;
    }
  
    throw new Error(
      "No image list found. Create 'images_list.txt' (one PNG per line) in the experiment folder " +
      "or place 'colored_file_list.csv' with a 'filename' header."
    );
  }
  
  // Call this ONCE at startup (e.g., Begin Experiment): await initImageCatalog();
  async function initImageCatalog() {
    _catalog_images = await load_filenames();
    if (_catalog_images.length < 5) {
      throw new Error("Need at least 5 PNG filenames in your list.");
    }
  }
  
  function pick_five_images() {
    // Because filenames encode unique (shape,color) pairs,
    // sampling without replacement ensures no pair repeats.
    return _sampleN(_catalog_images, 5);
  }
  
  function pick_foil(not_in_list) {
    const blacklist = new Set(not_in_list || []);
    const candidates = _catalog_images.filter(f => !blacklist.has(f));
    if (candidates.length === 0) {
      throw new Error("No available foil images (catalog too small vs. shown set).");
    }
    return _choice(candidates);
  }
  
  // --- Retrieval state (persist across routines), mirroring your Python ---
  let target_idx = null;
  let target_image = null;
  let foil_image = null;
  
  // Display control for retrieval routine
  let image_left_file = null;
  let image_right_file = null;
  let image_center_file = null;
  
  let left_opacity = 0.0;
  let right_opacity = 0.0;
  let center_opacity = 0.0;
  
  // For scoring / logging
  let correct_side = null;      // 'left' or 'right' for 2-AFC
  let center_is_target = null;  // true/false for 1-AFC
  
  // ---- Expose & initialize (since this is in Begin Experiment inside experimentInit, top-level await is fine here) ----
  Object.assign(window, { pick_five_images, pick_foil, initImageCatalog });
  
  // load the catalog once before any trial starts
  await initImageCatalog();
  
  image_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, (- 0.4)], 
    draggable: false,
    size : [0.18, 0.18],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, (- 0.2)], 
    draggable: false,
    size : [0.18, 0.18],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.0], 
    draggable: false,
    size : [0.18, 0.18],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.2], 
    draggable: false,
    size : [0.18, 0.18],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.4], 
    draggable: false,
    size : [0.18, 0.18],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "maintenance"
  maintenanceClock = new util.Clock();
  mask = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mask', units : undefined, 
    image : 'mask/Gaussian white noise.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "retrieval"
  retrievalClock = new util.Clock();
  image_left = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_left', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.2), 0], 
    draggable: false,
    size : [0.18, 0.18],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_right = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_right', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.2, 0], 
    draggable: false,
    size : [0.18, 0.18],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_center = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_center', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.18, 0.18],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  retrieval_answer = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "confidence"
  confidenceClock = new util.Clock();
  confidence_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'confidence_text',
    text: 'Насколько вы уверены?\n\n1 - не уверен\n2 - скорее не уверен\n3 - скорее уверен\n4 - уверен',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  confidence_answer = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "pause"
  pauseClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Вы можете сделать паузу.\n\nНажмите ПРОБЕЛ, чтобы перейти к инструкции к следующему этапу.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  pause_next = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_block = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_block',
    text: 'Спасибо за участие в эксперименте! \n\nПодождите несколько секунд, данные сохраняются.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_experiment = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  psychoJS._saveResults = 0;
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var welcome_instructionMaxDurationReached;
var _go_to_blocks_allKeys;
var welcome_instructionMaxDuration;
var welcome_instructionComponents;
function welcome_instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome_instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    welcome_instructionClock.reset();
    routineTimer.reset();
    welcome_instructionMaxDurationReached = false;
    // update component parameters for each repeat
    go_to_blocks.keys = undefined;
    go_to_blocks.rt = undefined;
    _go_to_blocks_allKeys = [];
    psychoJS.experiment.addData('welcome_instruction.started', globalClock.getTime());
    welcome_instructionMaxDuration = null
    // keep track of which components have finished
    welcome_instructionComponents = [];
    welcome_instructionComponents.push(instruction_welcome);
    welcome_instructionComponents.push(go_to_blocks);
    
    welcome_instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcome_instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome_instruction' ---
    // get current time
    t = welcome_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_welcome* updates
    if (t >= 0.0 && instruction_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_welcome.tStart = t;  // (not accounting for frame time here)
      instruction_welcome.frameNStart = frameN;  // exact frame index
      
      instruction_welcome.setAutoDraw(true);
    }
    
    
    // if instruction_welcome is active this frame...
    if (instruction_welcome.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *go_to_blocks* updates
    if (t >= 0.0 && go_to_blocks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      go_to_blocks.tStart = t;  // (not accounting for frame time here)
      go_to_blocks.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { go_to_blocks.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { go_to_blocks.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { go_to_blocks.clearEvents(); });
    }
    
    // if go_to_blocks is active this frame...
    if (go_to_blocks.status === PsychoJS.Status.STARTED) {
      let theseKeys = go_to_blocks.getKeys({keyList: 'space', waitRelease: false});
      _go_to_blocks_allKeys = _go_to_blocks_allKeys.concat(theseKeys);
      if (_go_to_blocks_allKeys.length > 0) {
        go_to_blocks.keys = _go_to_blocks_allKeys[_go_to_blocks_allKeys.length - 1].name;  // just the last key pressed
        go_to_blocks.rt = _go_to_blocks_allKeys[_go_to_blocks_allKeys.length - 1].rt;
        go_to_blocks.duration = _go_to_blocks_allKeys[_go_to_blocks_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcome_instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcome_instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome_instruction' ---
    welcome_instructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('welcome_instruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(go_to_blocks.corr, level);
    }
    psychoJS.experiment.addData('go_to_blocks.keys', go_to_blocks.keys);
    if (typeof go_to_blocks.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('go_to_blocks.rt', go_to_blocks.rt);
        psychoJS.experiment.addData('go_to_blocks.duration', go_to_blocks.duration);
        routineTimer.reset();
        }
    
    go_to_blocks.stop();
    // the Routine "welcome_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var condition_block;
function condition_blockLoopBegin(condition_blockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    condition_block = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'block_settings.xlsx',
      seed: undefined, name: 'condition_block'
    });
    psychoJS.experiment.addLoop(condition_block); // add the loop to the experiment
    currentLoop = condition_block;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    condition_block.forEach(function() {
      snapshot = condition_block.getSnapshot();
    
      condition_blockLoopScheduler.add(importConditions(snapshot));
      condition_blockLoopScheduler.add(instructionRoutineBegin(snapshot));
      condition_blockLoopScheduler.add(instructionRoutineEachFrame());
      condition_blockLoopScheduler.add(instructionRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      condition_blockLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      condition_blockLoopScheduler.add(trialsLoopScheduler);
      condition_blockLoopScheduler.add(trialsLoopEnd);
      condition_blockLoopScheduler.add(pauseRoutineBegin(snapshot));
      condition_blockLoopScheduler.add(pauseRoutineEachFrame());
      condition_blockLoopScheduler.add(pauseRoutineEnd(snapshot));
      condition_blockLoopScheduler.add(condition_blockLoopEndIteration(condition_blockLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(fixation_crossRoutineBegin(snapshot));
      trialsLoopScheduler.add(fixation_crossRoutineEachFrame());
      trialsLoopScheduler.add(fixation_crossRoutineEnd(snapshot));
      trialsLoopScheduler.add(encodingRoutineBegin(snapshot));
      trialsLoopScheduler.add(encodingRoutineEachFrame());
      trialsLoopScheduler.add(encodingRoutineEnd(snapshot));
      trialsLoopScheduler.add(maintenanceRoutineBegin(snapshot));
      trialsLoopScheduler.add(maintenanceRoutineEachFrame());
      trialsLoopScheduler.add(maintenanceRoutineEnd(snapshot));
      trialsLoopScheduler.add(retrievalRoutineBegin(snapshot));
      trialsLoopScheduler.add(retrievalRoutineEachFrame());
      trialsLoopScheduler.add(retrievalRoutineEnd(snapshot));
      trialsLoopScheduler.add(confidenceRoutineBegin(snapshot));
      trialsLoopScheduler.add(confidenceRoutineEachFrame());
      trialsLoopScheduler.add(confidenceRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function condition_blockLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(condition_block);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function condition_blockLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var instructionMaxDurationReached;
var _go_to_trials_allKeys;
var instructionMaxDuration;
var instructionComponents;
function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructionClock.reset();
    routineTimer.reset();
    instructionMaxDurationReached = false;
    // update component parameters for each repeat
    go_to_trials.keys = undefined;
    go_to_trials.rt = undefined;
    _go_to_trials_allKeys = [];
    instruction_text_block.setText(instruction_text);
    psychoJS.experiment.addData('instruction.started', globalClock.getTime());
    instructionMaxDuration = null
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(go_to_trials);
    instructionComponents.push(instruction_text_block);
    
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction' ---
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *go_to_trials* updates
    if (t >= 0.0 && go_to_trials.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      go_to_trials.tStart = t;  // (not accounting for frame time here)
      go_to_trials.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { go_to_trials.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { go_to_trials.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { go_to_trials.clearEvents(); });
    }
    
    // if go_to_trials is active this frame...
    if (go_to_trials.status === PsychoJS.Status.STARTED) {
      let theseKeys = go_to_trials.getKeys({keyList: 'space', waitRelease: false});
      _go_to_trials_allKeys = _go_to_trials_allKeys.concat(theseKeys);
      if (_go_to_trials_allKeys.length > 0) {
        go_to_trials.keys = _go_to_trials_allKeys[_go_to_trials_allKeys.length - 1].name;  // just the last key pressed
        go_to_trials.rt = _go_to_trials_allKeys[_go_to_trials_allKeys.length - 1].rt;
        go_to_trials.duration = _go_to_trials_allKeys[_go_to_trials_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instruction_text_block* updates
    if (t >= 0.0 && instruction_text_block.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_block.tStart = t;  // (not accounting for frame time here)
      instruction_text_block.frameNStart = frameN;  // exact frame index
      
      instruction_text_block.setAutoDraw(true);
    }
    
    
    // if instruction_text_block is active this frame...
    if (instruction_text_block.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction' ---
    instructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(go_to_trials.corr, level);
    }
    psychoJS.experiment.addData('go_to_trials.keys', go_to_trials.keys);
    if (typeof go_to_trials.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('go_to_trials.rt', go_to_trials.rt);
        psychoJS.experiment.addData('go_to_trials.duration', go_to_trials.duration);
        routineTimer.reset();
        }
    
    go_to_trials.stop();
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fixation_crossMaxDurationReached;
var fixation_crossMaxDuration;
var fixation_crossComponents;
function fixation_crossRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixation_cross' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    fixation_crossClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    fixation_crossMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('fixation_cross.started', globalClock.getTime());
    fixation_crossMaxDuration = null
    // keep track of which components have finished
    fixation_crossComponents = [];
    fixation_crossComponents.push(fix_cross);
    
    fixation_crossComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixation_crossRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixation_cross' ---
    // get current time
    t = fixation_crossClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_cross* updates
    if (t >= 0.0 && fix_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cross.tStart = t;  // (not accounting for frame time here)
      fix_cross.frameNStart = frameN;  // exact frame index
      
      fix_cross.setAutoDraw(true);
    }
    
    
    // if fix_cross is active this frame...
    if (fix_cross.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fix_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fix_cross.tStop = t;  // not accounting for scr refresh
      fix_cross.frameNStop = frameN;  // exact frame index
      // update status
      fix_cross.status = PsychoJS.Status.FINISHED;
      fix_cross.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fixation_crossComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixation_crossRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixation_cross' ---
    fixation_crossComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('fixation_cross.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (fixation_crossMaxDurationReached) {
        fixation_crossClock.add(fixation_crossMaxDuration);
    } else {
        fixation_crossClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var encodingMaxDurationReached;
var current_images;
var target_idx;
var target_image;
var encodingMaxDuration;
var encodingComponents;
function encodingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'encoding' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    encodingClock.reset();
    routineTimer.reset();
    encodingMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    // get 5 distinct filenames
    //current_images = pick_five_images();  // uses the global defined above
    current_images = window.pick_five_images();
    
    // choose a target index 0..4 (JS version of randrange)
    target_idx = Math.floor(Math.random() * 5);
    target_image = current_images[target_idx];
    
    // (Optional) log what was picked
    psychoJS.experiment.addData("enc_imgs", current_images.join(","));
    psychoJS.experiment.addData("enc_img1", current_images[0]);
    psychoJS.experiment.addData("enc_img2", current_images[1]);
    psychoJS.experiment.addData("enc_img3", current_images[2]);
    psychoJS.experiment.addData("enc_img4", current_images[3]);
    psychoJS.experiment.addData("enc_img5", current_images[4]);
    psychoJS.experiment.addData("target_image", target_image);
    psychoJS.experiment.addData("target_idx", target_idx);
    
    image_1.setImage(current_images[0]);
    image_2.setImage(current_images[1]);
    image_3.setImage(current_images[2]);
    image_4.setImage(current_images[3]);
    image_5.setImage(current_images[4]);
    psychoJS.experiment.addData('encoding.started', globalClock.getTime());
    encodingMaxDuration = null
    // keep track of which components have finished
    encodingComponents = [];
    encodingComponents.push(image_1);
    encodingComponents.push(image_2);
    encodingComponents.push(image_3);
    encodingComponents.push(image_4);
    encodingComponents.push(image_5);
    
    encodingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function encodingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'encoding' ---
    // get current time
    t = encodingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_1* updates
    if (t >= 0.0 && image_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1.tStart = t;  // (not accounting for frame time here)
      image_1.frameNStart = frameN;  // exact frame index
      
      image_1.setAutoDraw(true);
    }
    
    
    // if image_1 is active this frame...
    if (image_1.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_1.tStop = t;  // not accounting for scr refresh
      image_1.frameNStop = frameN;  // exact frame index
      // update status
      image_1.status = PsychoJS.Status.FINISHED;
      image_1.setAutoDraw(false);
    }
    
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    
    // if image_2 is active this frame...
    if (image_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_2.tStop = t;  // not accounting for scr refresh
      image_2.frameNStop = frameN;  // exact frame index
      // update status
      image_2.status = PsychoJS.Status.FINISHED;
      image_2.setAutoDraw(false);
    }
    
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }
    
    
    // if image_3 is active this frame...
    if (image_3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_3.tStop = t;  // not accounting for scr refresh
      image_3.frameNStop = frameN;  // exact frame index
      // update status
      image_3.status = PsychoJS.Status.FINISHED;
      image_3.setAutoDraw(false);
    }
    
    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }
    
    
    // if image_4 is active this frame...
    if (image_4.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_4.tStop = t;  // not accounting for scr refresh
      image_4.frameNStop = frameN;  // exact frame index
      // update status
      image_4.status = PsychoJS.Status.FINISHED;
      image_4.setAutoDraw(false);
    }
    
    
    // *image_5* updates
    if (t >= 0.0 && image_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_5.tStart = t;  // (not accounting for frame time here)
      image_5.frameNStart = frameN;  // exact frame index
      
      image_5.setAutoDraw(true);
    }
    
    
    // if image_5 is active this frame...
    if (image_5.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_5.tStop = t;  // not accounting for scr refresh
      image_5.frameNStop = frameN;  // exact frame index
      // update status
      image_5.status = PsychoJS.Status.FINISHED;
      image_5.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    encodingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function encodingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'encoding' ---
    encodingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('encoding.stopped', globalClock.getTime());
    // the Routine "encoding" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var maintenanceMaxDurationReached;
var maintenanceMaxDuration;
var maintenanceComponents;
function maintenanceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'maintenance' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    maintenanceClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    maintenanceMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('maintenance.started', globalClock.getTime());
    maintenanceMaxDuration = null
    // keep track of which components have finished
    maintenanceComponents = [];
    maintenanceComponents.push(mask);
    
    maintenanceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function maintenanceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'maintenance' ---
    // get current time
    t = maintenanceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *mask* updates
    if (t >= 0.0 && mask.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask.tStart = t;  // (not accounting for frame time here)
      mask.frameNStart = frameN;  // exact frame index
      
      mask.setAutoDraw(true);
    }
    
    
    // if mask is active this frame...
    if (mask.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (mask.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      mask.tStop = t;  // not accounting for scr refresh
      mask.frameNStop = frameN;  // exact frame index
      // update status
      mask.status = PsychoJS.Status.FINISHED;
      mask.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    maintenanceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function maintenanceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'maintenance' ---
    maintenanceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('maintenance.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (maintenanceMaxDurationReached) {
        maintenanceClock.add(maintenanceMaxDuration);
    } else {
        maintenanceClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var retrievalMaxDurationReached;
var foil_image;
var image_left_file;
var image_right_file;
var correct_side;
var left_opacity;
var right_opacity;
var center_opacity;
var _retrieval_answer_allKeys;
var retrievalMaxDuration;
var retrievalComponents;
function retrievalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'retrieval' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    retrievalClock.reset();
    routineTimer.reset();
    retrievalMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    /*# Ensure target_image and current_images are coming from the previous routine
    if not current_images or target_image is None:
    raise RuntimeError("Retrieval stage did not receive current_images/target_image from encoding.")
    
    # Pick a foil that was NOT shown in encoding
    foil_image = pick_foil(current_images)
    
    # Randomize side assignment
    if random.random() < 0.5:
    image_left_file  = target_image
    image_right_file = foil_image
    correct_side = "left"
    else:
    image_left_file  = foil_image
    image_right_file = target_image
    correct_side = "right"
    
    # (Optional) log
    thisExp.addData('foil_image', foil_image)
    thisExp.addData('correct_side', correct_side)*/
    
    /*
    if (((! current_images) || (target_image === null))) {
        throw new RuntimeError("Retrieval stage did not receive current_images/target_image from encoding.");
    }
    foil_image = pick_foil(current_images);
    image_left_file = null;
    image_right_file = null;
    image_center_file = null;
    left_opacity = 0.0;
    right_opacity = 0.0;
    center_opacity = 0.0;
    correct_side = null;
    center_is_target = null;
    t = (typeof task !== "undefined" && task != null ? String(task) : "").trim();
    if ((t === "matching_to_sample_2")) {
        if ((Math.random() < 0.5)) {
            image_left_file = target_image;
            image_right_file = foil_image;
            correct_side = "left";
        } else {
            image_left_file = foil_image;
            image_right_file = target_image;
            correct_side = "right";
        }
        left_opacity = 1.0;
        right_opacity = 1.0;
        center_opacity = 0.0;
    } else {
        if ((t === "non_matching_to_sample_2")) {
            if ((Math.random() < 0.5)) {
                image_left_file = target_image;
                image_right_file = foil_image;
                correct_side = "right";
            } else {
                image_left_file = foil_image;
                image_right_file = target_image;
                correct_side = "left";
            }
            left_opacity = 1.0;
            right_opacity = 1.0;
            center_opacity = 0.0;
        } else {
            if ((t === "matching_to_sample_1")) {
                if ((Math.random() < 0.5)) {
                    image_center_file = target_image;
                    center_is_target = true;
                } else {
                    image_center_file = foil_image;
                    center_is_target = false;
                }
                center_opacity = 1.0;
                left_opacity = 0.0;
                right_opacity = 0.0;
            } else {
                throw new RuntimeError(`Unknown task value: ${t}`);
            }
        }
    }
    psychoJS.experiment.addData("retr_task", t);
    psychoJS.experiment.addData("retr_target", target_image);
    psychoJS.experiment.addData("retr_foil", foil_image);
    if (t.endsWith("_2")) {
        psychoJS.experiment.addData("correct_side", correct_side);
    }
    if (t.endsWith("_1")) {
        psychoJS.experiment.addData("center_is_target", center_is_target ? 1 : 0);
    }
    */
    
    // before the task branching
    foil_image = pick_foil(current_images);
    
    // SAFE DEFAULTS: never leave these null
    let image_left_file   = target_image;   // harmless fallback
    let image_right_file  = target_image;   // harmless fallback
    let image_center_file = target_image;   // harmless fallback
    
    let left_opacity = 0.0;
    let right_opacity = 0.0;
    let center_opacity = 0.0;
    let correct_side = null;
    let center_is_target = null;
    
    t = (typeof task !== "undefined" && task != null ? String(task) : "").trim();
    
    if (t === "matching_to_sample_2") {
      if (Math.random() < 0.5) {
        image_left_file = target_image; image_right_file = foil_image; correct_side = "left";
      } else {
        image_left_file = foil_image; image_right_file = target_image; correct_side = "right";
      }
      left_opacity = 1.0; right_opacity = 1.0; center_opacity = 0.0;
    }
    else if (t === "non_matching_to_sample_2") {
      if (Math.random() < 0.5) {
        image_left_file = target_image; image_right_file = foil_image; correct_side = "right";
      } else {
        image_left_file = foil_image; image_right_file = target_image; correct_side = "left";
      }
      left_opacity = 1.0; right_opacity = 1.0; center_opacity = 0.0;
    }
    else if (t === "matching_to_sample_1") {
      if (Math.random() < 0.5) {
        image_center_file = target_image; center_is_target = true;
      } else {
        image_center_file = foil_image;   center_is_target = false;
      }
      center_opacity = 1.0; left_opacity = 0.0; right_opacity = 0.0;
    }
    else {
      throw new RuntimeError(`Unknown task value: ${t}`);
    }
    
    psychoJS.experiment.addData('target_image', target_image);
    psychoJS.experiment.addData('foil_image', foil_image);
    psychoJS.experiment.addData('correct_side', correct_side);
    psychoJS.experiment.addData('center_is_target', center_is_target);
    image_left.setOpacity(left_opacity);
    image_left.setImage(image_left_file);
    image_right.setOpacity(right_opacity);
    image_right.setImage(image_right_file);
    image_center.setOpacity(center_opacity);
    image_center.setImage(image_center_file);
    retrieval_answer.keys = undefined;
    retrieval_answer.rt = undefined;
    _retrieval_answer_allKeys = [];
    psychoJS.experiment.addData('retrieval.started', globalClock.getTime());
    retrievalMaxDuration = null
    // keep track of which components have finished
    retrievalComponents = [];
    retrievalComponents.push(image_left);
    retrievalComponents.push(image_right);
    retrievalComponents.push(image_center);
    retrievalComponents.push(retrieval_answer);
    
    retrievalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function retrievalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'retrieval' ---
    // get current time
    t = retrievalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_left* updates
    if (t >= 0.0 && image_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_left.tStart = t;  // (not accounting for frame time here)
      image_left.frameNStart = frameN;  // exact frame index
      
      image_left.setAutoDraw(true);
    }
    
    
    // if image_left is active this frame...
    if (image_left.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *image_right* updates
    if (t >= 0.0 && image_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_right.tStart = t;  // (not accounting for frame time here)
      image_right.frameNStart = frameN;  // exact frame index
      
      image_right.setAutoDraw(true);
    }
    
    
    // if image_right is active this frame...
    if (image_right.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *image_center* updates
    if (t >= 0.0 && image_center.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_center.tStart = t;  // (not accounting for frame time here)
      image_center.frameNStart = frameN;  // exact frame index
      
      image_center.setAutoDraw(true);
    }
    
    
    // if image_center is active this frame...
    if (image_center.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *retrieval_answer* updates
    if (t >= 0.0 && retrieval_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      retrieval_answer.tStart = t;  // (not accounting for frame time here)
      retrieval_answer.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { retrieval_answer.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { retrieval_answer.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { retrieval_answer.clearEvents(); });
    }
    
    // if retrieval_answer is active this frame...
    if (retrieval_answer.status === PsychoJS.Status.STARTED) {
      let theseKeys = retrieval_answer.getKeys({keyList: ['1','0'], waitRelease: false});
      _retrieval_answer_allKeys = _retrieval_answer_allKeys.concat(theseKeys);
      if (_retrieval_answer_allKeys.length > 0) {
        retrieval_answer.keys = _retrieval_answer_allKeys[_retrieval_answer_allKeys.length - 1].name;  // just the last key pressed
        retrieval_answer.rt = _retrieval_answer_allKeys[_retrieval_answer_allKeys.length - 1].rt;
        retrieval_answer.duration = _retrieval_answer_allKeys[_retrieval_answer_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    retrievalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _pj;
var resp_key;
var chosen_side;
var is_correct;
var center_is_target;
function retrievalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'retrieval' ---
    retrievalComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('retrieval.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_2
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    /*
    resp_key = retrieval_answer.keys  # '1' or '0' or None
    chosen_side = 'left' if resp_key == '1' else ('right' if resp_key == '0' else 'none')
    is_correct = int(chosen_side == correct_side)
    
    # Log
    thisExp.addData('resp_key', resp_key)
    thisExp.addData('chosen_side', chosen_side)
    thisExp.addData('is_correct', is_correct)
    */
    
    resp_key = retrieval_answer.keys;
    chosen_side = null;
    is_correct = null;
    center_is_target = null;
    t = (typeof task !== "undefined" && task != null ? String(task) : "").trim();
    if (_pj.in_es6(t, ["matching_to_sample_2", "non_matching_to_sample_2"])) {
        if ((resp_key === "1")) {
            chosen_side = "left";
        } else {
            if ((resp_key === "0")) {
                chosen_side = "right";
            } else {
                chosen_side = "none";
            }
        }
        //is_correct = Number.parseInt((chosen_side === correct_side));
        is_correct = (chosen_side !== "none" && correct_side) ? (chosen_side === correct_side ? 1 : 0) : 0;
    } else {
        if ((t === "matching_to_sample_1")) {
            if (_pj.in_es6(resp_key, ["1", "0"])) {
                let said_yes = (resp_key === "1");
                is_correct = Number(Boolean(center_is_target) === said_yes);
            } else {
                is_correct = 0;
            }
        }
    }
    
    psychoJS.experiment.addData("chosen_side", (chosen_side ? chosen_side : ""));
    psychoJS.experiment.addData("is_correct", is_correct);
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(retrieval_answer.corr, level);
    }
    psychoJS.experiment.addData('retrieval_answer.keys', retrieval_answer.keys);
    if (typeof retrieval_answer.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('retrieval_answer.rt', retrieval_answer.rt);
        psychoJS.experiment.addData('retrieval_answer.duration', retrieval_answer.duration);
        routineTimer.reset();
        }
    
    retrieval_answer.stop();
    // the Routine "retrieval" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var confidenceMaxDurationReached;
var _confidence_answer_allKeys;
var confidenceMaxDuration;
var confidenceComponents;
function confidenceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'confidence' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    confidenceClock.reset();
    routineTimer.reset();
    confidenceMaxDurationReached = false;
    // update component parameters for each repeat
    confidence_answer.keys = undefined;
    confidence_answer.rt = undefined;
    _confidence_answer_allKeys = [];
    psychoJS.experiment.addData('confidence.started', globalClock.getTime());
    confidenceMaxDuration = null
    // keep track of which components have finished
    confidenceComponents = [];
    confidenceComponents.push(confidence_text);
    confidenceComponents.push(confidence_answer);
    
    confidenceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function confidenceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'confidence' ---
    // get current time
    t = confidenceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *confidence_text* updates
    if (t >= 0.0 && confidence_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence_text.tStart = t;  // (not accounting for frame time here)
      confidence_text.frameNStart = frameN;  // exact frame index
      
      confidence_text.setAutoDraw(true);
    }
    
    
    // if confidence_text is active this frame...
    if (confidence_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *confidence_answer* updates
    if (t >= 0.0 && confidence_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence_answer.tStart = t;  // (not accounting for frame time here)
      confidence_answer.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { confidence_answer.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { confidence_answer.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { confidence_answer.clearEvents(); });
    }
    
    // if confidence_answer is active this frame...
    if (confidence_answer.status === PsychoJS.Status.STARTED) {
      let theseKeys = confidence_answer.getKeys({keyList: ['1','2','3','4'], waitRelease: false});
      _confidence_answer_allKeys = _confidence_answer_allKeys.concat(theseKeys);
      if (_confidence_answer_allKeys.length > 0) {
        confidence_answer.keys = _confidence_answer_allKeys[_confidence_answer_allKeys.length - 1].name;  // just the last key pressed
        confidence_answer.rt = _confidence_answer_allKeys[_confidence_answer_allKeys.length - 1].rt;
        confidence_answer.duration = _confidence_answer_allKeys[_confidence_answer_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    confidenceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function confidenceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'confidence' ---
    confidenceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('confidence.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(confidence_answer.corr, level);
    }
    psychoJS.experiment.addData('confidence_answer.keys', confidence_answer.keys);
    if (typeof confidence_answer.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('confidence_answer.rt', confidence_answer.rt);
        psychoJS.experiment.addData('confidence_answer.duration', confidence_answer.duration);
        routineTimer.reset();
        }
    
    confidence_answer.stop();
    // the Routine "confidence" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pauseMaxDurationReached;
var _pause_next_allKeys;
var pauseMaxDuration;
var pauseComponents;
function pauseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pause' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    pauseClock.reset();
    routineTimer.reset();
    pauseMaxDurationReached = false;
    // update component parameters for each repeat
    pause_next.keys = undefined;
    pause_next.rt = undefined;
    _pause_next_allKeys = [];
    psychoJS.experiment.addData('pause.started', globalClock.getTime());
    pauseMaxDuration = null
    // keep track of which components have finished
    pauseComponents = [];
    pauseComponents.push(text_2);
    pauseComponents.push(pause_next);
    
    pauseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function pauseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pause' ---
    // get current time
    t = pauseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // if text_2 is active this frame...
    if (text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *pause_next* updates
    if (t >= 0.0 && pause_next.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pause_next.tStart = t;  // (not accounting for frame time here)
      pause_next.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { pause_next.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { pause_next.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { pause_next.clearEvents(); });
    }
    
    // if pause_next is active this frame...
    if (pause_next.status === PsychoJS.Status.STARTED) {
      let theseKeys = pause_next.getKeys({keyList: 'space', waitRelease: false});
      _pause_next_allKeys = _pause_next_allKeys.concat(theseKeys);
      if (_pause_next_allKeys.length > 0) {
        pause_next.keys = _pause_next_allKeys[_pause_next_allKeys.length - 1].name;  // just the last key pressed
        pause_next.rt = _pause_next_allKeys[_pause_next_allKeys.length - 1].rt;
        pause_next.duration = _pause_next_allKeys[_pause_next_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    pauseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pauseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pause' ---
    pauseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('pause.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(pause_next.corr, level);
    }
    psychoJS.experiment.addData('pause_next.keys', pause_next.keys);
    if (typeof pause_next.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('pause_next.rt', pause_next.rt);
        psychoJS.experiment.addData('pause_next.duration', pause_next.duration);
        routineTimer.reset();
        }
    
    pause_next.stop();
    // the Routine "pause" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endMaxDurationReached;
var _end_experiment_allKeys;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    endClock.reset();
    routineTimer.reset();
    endMaxDurationReached = false;
    // update component parameters for each repeat
    end_experiment.keys = undefined;
    end_experiment.rt = undefined;
    _end_experiment_allKeys = [];
    // experimentID is what you change
    
    psychoJS._saveResults = 0;
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    let dataObj = psychoJS._experiment._trialsData;
    
    let data = makeString(dataObj);
    
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',   
        },
        body: JSON.stringify({
            experimentID: 'PKSoCOjNep0R',
            filename: filename,
            data: data,
        }),
    }).then(response => response.json()).then(data => {
        console.log(data);
        quitPsychoJS();
    })
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = null
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_block);
    endComponents.push(end_experiment);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_block* updates
    if (t >= 0.0 && end_block.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_block.tStart = t;  // (not accounting for frame time here)
      end_block.frameNStart = frameN;  // exact frame index
      
      end_block.setAutoDraw(true);
    }
    
    
    // if end_block is active this frame...
    if (end_block.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (end_block.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      end_block.tStop = t;  // not accounting for scr refresh
      end_block.frameNStop = frameN;  // exact frame index
      // update status
      end_block.status = PsychoJS.Status.FINISHED;
      end_block.setAutoDraw(false);
    }
    
    
    // *end_experiment* updates
    if (t >= 0.0 && end_experiment.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_experiment.tStart = t;  // (not accounting for frame time here)
      end_experiment.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_experiment.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_experiment.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_experiment.clearEvents(); });
    }
    
    // if end_experiment is active this frame...
    if (end_experiment.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_experiment.getKeys({keyList: 'space', waitRelease: false});
      _end_experiment_allKeys = _end_experiment_allKeys.concat(theseKeys);
      if (_end_experiment_allKeys.length > 0) {
        end_experiment.keys = _end_experiment_allKeys[_end_experiment_allKeys.length - 1].name;  // just the last key pressed
        end_experiment.rt = _end_experiment_allKeys[_end_experiment_allKeys.length - 1].rt;
        end_experiment.duration = _end_experiment_allKeys[_end_experiment_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_experiment.corr, level);
    }
    psychoJS.experiment.addData('end_experiment.keys', end_experiment.keys);
    if (typeof end_experiment.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_experiment.rt', end_experiment.rt);
        psychoJS.experiment.addData('end_experiment.duration', end_experiment.duration);
        routineTimer.reset();
        }
    
    end_experiment.stop();
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
