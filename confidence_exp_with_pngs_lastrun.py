#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2025.1.1),
    on October 17, 2025, at 17:11
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (
    NOT_STARTED, STARTED, PLAYING, PAUSED, STOPPED, STOPPING, FINISHED, PRESSED, 
    RELEASED, FOREVER, priority
)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2025.1.1'
expName = 'confidence_exp_with_pngs'  # from the Builder filename that created this script
expVersion = ''
# a list of functions to run when the experiment ends (starts off blank)
runAtExit = []
# information about this experiment
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'expVersion|hid': expVersion,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = [1536, 960]
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']
    # replace default participant ID
    if prefs.piloting['replaceParticipantID']:
        expInfo['participant'] = 'pilot'

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version=expVersion,
        extraInfo=expInfo, runtimeInfo=None,
        originPath='C:\\Users\\Yana\\Downloads\\confidence_exp_with_pngs\\confidence_exp_with_pngs_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log')
    if PILOTING:
        logFile.setLevel(
            prefs.piloting['pilotLoggingLevel']
        )
    else:
        logFile.setLevel(
            logging.getLevel('info')
        )
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowGUI=False, allowStencil=False,
            monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height',
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0,0,0]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.hideMessage()
    if PILOTING:
        # show a visual indicator if we're in piloting mode
        if prefs.piloting['showPilotingIndicator']:
            win.showPilotingIndicator()
        # always show the mouse in piloting mode
        if prefs.piloting['forceMouseVisible']:
            win.mouseVisible = True
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    ioSession = ioServer = eyetracker = None
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ptb'
        )
    if deviceManager.getDevice('go_to_blocks') is None:
        # initialise go_to_blocks
        go_to_blocks = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='go_to_blocks',
        )
    if deviceManager.getDevice('go_to_trials') is None:
        # initialise go_to_trials
        go_to_trials = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='go_to_trials',
        )
    if deviceManager.getDevice('retrieval_answer') is None:
        # initialise retrieval_answer
        retrieval_answer = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='retrieval_answer',
        )
    if deviceManager.getDevice('confidence_answer') is None:
        # initialise confidence_answer
        confidence_answer = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='confidence_answer',
        )
    if deviceManager.getDevice('pause_next') is None:
        # initialise pause_next
        pause_next = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='pause_next',
        )
    if deviceManager.getDevice('end_experiment') is None:
        # initialise end_experiment
        end_experiment = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='end_experiment',
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], currentRoutine=None):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    currentRoutine : psychopy.data.Routine
        Current Routine we are in at time of pausing, if any. This object tells PsychoPy what Components to pause/play/dispatch.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='PsychToolbox',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # dispatch messages on response components
        if currentRoutine is not None:
            for comp in currentRoutine.getDispatchComponents():
                comp.device.dispatchMessages()
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure window is set to foreground to prevent losing focus
    win.winHandle.activate()
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='PsychToolbox'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "welcome_instruction" ---
    instruction_welcome = visual.TextStim(win=win, name='instruction_welcome',
        text='Здравствуйте, вам предстоит пройти эксперимент... Он будет состоять из... этапов. Вы сможете делать паузы между этапами, но, пожалуйста, не отвлекайтесь во время прохождения этапа.\n\nНажмите ПРОБЕЛ, чтобы перейти к инструкции для первого этапа.',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    go_to_blocks = keyboard.Keyboard(deviceName='go_to_blocks')
    
    # --- Initialize components for Routine "instruction" ---
    go_to_trials = keyboard.Keyboard(deviceName='go_to_trials')
    instruction_text_block = visual.TextStim(win=win, name='instruction_text_block',
        text='',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    
    # --- Initialize components for Routine "fixation_cross" ---
    fix_cross = visual.ShapeStim(
        win=win, name='fix_cross', vertices='cross',
        size=(0.05, 0.05),
        ori=0.0, pos=(0, 0), draggable=False, anchor='center',
        lineWidth=0.5,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=0.0, interpolate=True)
    
    # --- Initialize components for Routine "encoding" ---
    # Run 'Begin Experiment' code from code
    import random
    
    # --- SETTINGS ---
    # Primary manifest (one filename per line). Place it in the experiment root.
    MANIFEST_TXT = "images_list.txt"
    
    # Optional fallback CSV (first column header "filename"). If MANIFEST_TXT is missing,
    # the code tries this name. You can rename it if needed.
    FALLBACK_CSV = "colored_file_list.csv"
    
    def _load_from_txt(path):
        """Load non-empty lines, strip whitespace."""
        with open(path, "r", encoding="utf-8") as f:
            lines = [ln.strip() for ln in f.readlines()]
        return [ln for ln in lines if ln and (ln.lower().endswith(".png"))]
    
    def _load_from_csv(path):
        """Very simple CSV reader: first column is the filename."""
        rows = []
        with open(path, "r", encoding="utf-8") as f:
            for i, ln in enumerate(f):
                ln = ln.strip()
                if not ln:
                    continue
                # split by comma; take first column
                parts = ln.split(",")
                if i == 0 and parts[0].lower() == "filename":
                    continue  # skip header
                name = parts[0].strip()
                if name.lower().endswith(".png"):
                    rows.append(name)
        return rows
    
    def load_filenames():
        # Try TXT first
        try:
            files = _load_from_txt(MANIFEST_TXT)
            if files:
                return files
        except Exception:
            pass
        # Try CSV fallback
        try:
            files = _load_from_csv(FALLBACK_CSV)
            if files:
                return files
        except Exception:
            pass
        # If both failed:
        raise RuntimeError(
            "No image list found. Create 'images_list.txt' (one PNG per line) in the experiment folder "
            "or place 'colored_file_list.csv' with a 'filename' header."
        )
    
    # Load once per session
    _catalog_images = load_filenames()
    if len(_catalog_images) < 5:
        raise RuntimeError("Need at least 5 PNG filenames in your list.")
    
    def pick_five_images():
        """Return 5 distinct filenames (no pair repeats on the screen)."""
        # Because each filename encodes a unique (shape,color) pair,
        # sampling without replacement ensures no identical pair repeats.
        return random.sample(_catalog_images, 5)
    
    # --- Retrieval state (persist across routines) ---
    target_idx = None
    target_image = None
    foil_image = None
    
    # Display control for retrieval routine
    image_left_file  = None
    image_right_file = None
    image_center_file = None
    
    left_opacity = 0.0
    right_opacity = 0.0
    center_opacity = 0.0
    
    # For scoring / logging
    correct_side = None           # 'left' or 'right' for 2-AFC cases
    center_is_target = None       # True/False for 1-AFC case
    
    def pick_foil(not_in_list):
        candidates = [f for f in _catalog_images if f not in not_in_list]
        if not candidates:
            raise RuntimeError("No available foil images (catalog too small vs. shown set).")
        return random.choice(candidates)
    image_1 = visual.ImageStim(
        win=win,
        name='image_1', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, -0.4), draggable=False, size=(0.18, 0.18),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    image_2 = visual.ImageStim(
        win=win,
        name='image_2', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, -0.2), draggable=False, size=(0.18, 0.18),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    image_3 = visual.ImageStim(
        win=win,
        name='image_3', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0.0), draggable=False, size=(0.18, 0.18),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    image_4 = visual.ImageStim(
        win=win,
        name='image_4', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0.2), draggable=False, size=(0.18, 0.18),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    image_5 = visual.ImageStim(
        win=win,
        name='image_5', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0.4), draggable=False, size=(0.18, 0.18),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    
    # --- Initialize components for Routine "maintenance" ---
    mask = visual.ImageStim(
        win=win,
        name='mask', 
        image='mask/Gaussian white noise.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(2, 1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    
    # --- Initialize components for Routine "retrieval" ---
    image_left = visual.ImageStim(
        win=win,
        name='image_left', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.2, 0), draggable=False, size=(0.18, 0.18),
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    image_right = visual.ImageStim(
        win=win,
        name='image_right', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0.2, 0), draggable=False, size=(0.18, 0.18),
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    image_center = visual.ImageStim(
        win=win,
        name='image_center', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(0.18, 0.18),
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    retrieval_answer = keyboard.Keyboard(deviceName='retrieval_answer')
    
    # --- Initialize components for Routine "confidence" ---
    confidence_text = visual.TextStim(win=win, name='confidence_text',
        text='Насколько вы уверены?\n\n1 - не уверен\n2 - скорее не уверен\n3 - скорее уверен\n4 - уверен',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    confidence_answer = keyboard.Keyboard(deviceName='confidence_answer')
    
    # --- Initialize components for Routine "pause" ---
    text_2 = visual.TextStim(win=win, name='text_2',
        text='Вы можете сделать паузу.\n\nНажмите ПРОБЕЛ, чтобы перейти к инструкции к следующему этапу.',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    pause_next = keyboard.Keyboard(deviceName='pause_next')
    
    # --- Initialize components for Routine "end" ---
    end_block = visual.TextStim(win=win, name='end_block',
        text='Спасибо за участие в эксперименте! \n\nНажмите ПРОБЕЛ, чтобы выйти из эксперимента.',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    end_experiment = keyboard.Keyboard(deviceName='end_experiment')
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "welcome_instruction" ---
    # create an object to store info about Routine welcome_instruction
    welcome_instruction = data.Routine(
        name='welcome_instruction',
        components=[instruction_welcome, go_to_blocks],
    )
    welcome_instruction.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for go_to_blocks
    go_to_blocks.keys = []
    go_to_blocks.rt = []
    _go_to_blocks_allKeys = []
    # store start times for welcome_instruction
    welcome_instruction.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    welcome_instruction.tStart = globalClock.getTime(format='float')
    welcome_instruction.status = STARTED
    thisExp.addData('welcome_instruction.started', welcome_instruction.tStart)
    welcome_instruction.maxDuration = None
    # keep track of which components have finished
    welcome_instructionComponents = welcome_instruction.components
    for thisComponent in welcome_instruction.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "welcome_instruction" ---
    welcome_instruction.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instruction_welcome* updates
        
        # if instruction_welcome is starting this frame...
        if instruction_welcome.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instruction_welcome.frameNStart = frameN  # exact frame index
            instruction_welcome.tStart = t  # local t and not account for scr refresh
            instruction_welcome.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instruction_welcome, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instruction_welcome.started')
            # update status
            instruction_welcome.status = STARTED
            instruction_welcome.setAutoDraw(True)
        
        # if instruction_welcome is active this frame...
        if instruction_welcome.status == STARTED:
            # update params
            pass
        
        # *go_to_blocks* updates
        waitOnFlip = False
        
        # if go_to_blocks is starting this frame...
        if go_to_blocks.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            go_to_blocks.frameNStart = frameN  # exact frame index
            go_to_blocks.tStart = t  # local t and not account for scr refresh
            go_to_blocks.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(go_to_blocks, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'go_to_blocks.started')
            # update status
            go_to_blocks.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(go_to_blocks.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(go_to_blocks.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if go_to_blocks.status == STARTED and not waitOnFlip:
            theseKeys = go_to_blocks.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _go_to_blocks_allKeys.extend(theseKeys)
            if len(_go_to_blocks_allKeys):
                go_to_blocks.keys = _go_to_blocks_allKeys[-1].name  # just the last key pressed
                go_to_blocks.rt = _go_to_blocks_allKeys[-1].rt
                go_to_blocks.duration = _go_to_blocks_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=welcome_instruction,
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            welcome_instruction.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in welcome_instruction.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "welcome_instruction" ---
    for thisComponent in welcome_instruction.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for welcome_instruction
    welcome_instruction.tStop = globalClock.getTime(format='float')
    welcome_instruction.tStopRefresh = tThisFlipGlobal
    thisExp.addData('welcome_instruction.stopped', welcome_instruction.tStop)
    # check responses
    if go_to_blocks.keys in ['', [], None]:  # No response was made
        go_to_blocks.keys = None
    thisExp.addData('go_to_blocks.keys',go_to_blocks.keys)
    if go_to_blocks.keys != None:  # we had a response
        thisExp.addData('go_to_blocks.rt', go_to_blocks.rt)
        thisExp.addData('go_to_blocks.duration', go_to_blocks.duration)
    thisExp.nextEntry()
    # the Routine "welcome_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    condition_block = data.TrialHandler2(
        name='condition_block',
        nReps=1.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('block_settings.xlsx'), 
        seed=None, 
    )
    thisExp.addLoop(condition_block)  # add the loop to the experiment
    thisCondition_block = condition_block.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisCondition_block.rgb)
    if thisCondition_block != None:
        for paramName in thisCondition_block:
            globals()[paramName] = thisCondition_block[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisCondition_block in condition_block:
        condition_block.status = STARTED
        if hasattr(thisCondition_block, 'status'):
            thisCondition_block.status = STARTED
        currentLoop = condition_block
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisCondition_block.rgb)
        if thisCondition_block != None:
            for paramName in thisCondition_block:
                globals()[paramName] = thisCondition_block[paramName]
        
        # --- Prepare to start Routine "instruction" ---
        # create an object to store info about Routine instruction
        instruction = data.Routine(
            name='instruction',
            components=[go_to_trials, instruction_text_block],
        )
        instruction.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # create starting attributes for go_to_trials
        go_to_trials.keys = []
        go_to_trials.rt = []
        _go_to_trials_allKeys = []
        instruction_text_block.setText(instruction_text)
        # store start times for instruction
        instruction.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        instruction.tStart = globalClock.getTime(format='float')
        instruction.status = STARTED
        thisExp.addData('instruction.started', instruction.tStart)
        instruction.maxDuration = None
        # keep track of which components have finished
        instructionComponents = instruction.components
        for thisComponent in instruction.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "instruction" ---
        instruction.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisCondition_block, 'status') and thisCondition_block.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *go_to_trials* updates
            waitOnFlip = False
            
            # if go_to_trials is starting this frame...
            if go_to_trials.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                go_to_trials.frameNStart = frameN  # exact frame index
                go_to_trials.tStart = t  # local t and not account for scr refresh
                go_to_trials.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(go_to_trials, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'go_to_trials.started')
                # update status
                go_to_trials.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(go_to_trials.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(go_to_trials.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if go_to_trials.status == STARTED and not waitOnFlip:
                theseKeys = go_to_trials.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _go_to_trials_allKeys.extend(theseKeys)
                if len(_go_to_trials_allKeys):
                    go_to_trials.keys = _go_to_trials_allKeys[-1].name  # just the last key pressed
                    go_to_trials.rt = _go_to_trials_allKeys[-1].rt
                    go_to_trials.duration = _go_to_trials_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # *instruction_text_block* updates
            
            # if instruction_text_block is starting this frame...
            if instruction_text_block.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                instruction_text_block.frameNStart = frameN  # exact frame index
                instruction_text_block.tStart = t  # local t and not account for scr refresh
                instruction_text_block.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(instruction_text_block, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'instruction_text_block.started')
                # update status
                instruction_text_block.status = STARTED
                instruction_text_block.setAutoDraw(True)
            
            # if instruction_text_block is active this frame...
            if instruction_text_block.status == STARTED:
                # update params
                pass
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=instruction,
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                instruction.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in instruction.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "instruction" ---
        for thisComponent in instruction.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for instruction
        instruction.tStop = globalClock.getTime(format='float')
        instruction.tStopRefresh = tThisFlipGlobal
        thisExp.addData('instruction.stopped', instruction.tStop)
        # check responses
        if go_to_trials.keys in ['', [], None]:  # No response was made
            go_to_trials.keys = None
        condition_block.addData('go_to_trials.keys',go_to_trials.keys)
        if go_to_trials.keys != None:  # we had a response
            condition_block.addData('go_to_trials.rt', go_to_trials.rt)
            condition_block.addData('go_to_trials.duration', go_to_trials.duration)
        # the Routine "instruction" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        trials = data.TrialHandler2(
            name='trials',
            nReps=5.0, 
            method='random', 
            extraInfo=expInfo, 
            originPath=-1, 
            trialList=[None], 
            seed=None, 
        )
        thisExp.addLoop(trials)  # add the loop to the experiment
        thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                globals()[paramName] = thisTrial[paramName]
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        
        for thisTrial in trials:
            trials.status = STARTED
            if hasattr(thisTrial, 'status'):
                thisTrial.status = STARTED
            currentLoop = trials
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
            # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
            if thisTrial != None:
                for paramName in thisTrial:
                    globals()[paramName] = thisTrial[paramName]
            
            # --- Prepare to start Routine "fixation_cross" ---
            # create an object to store info about Routine fixation_cross
            fixation_cross = data.Routine(
                name='fixation_cross',
                components=[fix_cross],
            )
            fixation_cross.status = NOT_STARTED
            continueRoutine = True
            # update component parameters for each repeat
            # store start times for fixation_cross
            fixation_cross.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
            fixation_cross.tStart = globalClock.getTime(format='float')
            fixation_cross.status = STARTED
            thisExp.addData('fixation_cross.started', fixation_cross.tStart)
            fixation_cross.maxDuration = None
            # keep track of which components have finished
            fixation_crossComponents = fixation_cross.components
            for thisComponent in fixation_cross.components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "fixation_cross" ---
            fixation_cross.forceEnded = routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 0.5:
                # if trial has changed, end Routine now
                if hasattr(thisTrial, 'status') and thisTrial.status == STOPPING:
                    continueRoutine = False
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *fix_cross* updates
                
                # if fix_cross is starting this frame...
                if fix_cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    fix_cross.frameNStart = frameN  # exact frame index
                    fix_cross.tStart = t  # local t and not account for scr refresh
                    fix_cross.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(fix_cross, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'fix_cross.started')
                    # update status
                    fix_cross.status = STARTED
                    fix_cross.setAutoDraw(True)
                
                # if fix_cross is active this frame...
                if fix_cross.status == STARTED:
                    # update params
                    pass
                
                # if fix_cross is stopping this frame...
                if fix_cross.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > fix_cross.tStartRefresh + 0.5-frameTolerance:
                        # keep track of stop time/frame for later
                        fix_cross.tStop = t  # not accounting for scr refresh
                        fix_cross.tStopRefresh = tThisFlipGlobal  # on global time
                        fix_cross.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'fix_cross.stopped')
                        # update status
                        fix_cross.status = FINISHED
                        fix_cross.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                # pause experiment here if requested
                if thisExp.status == PAUSED:
                    pauseExperiment(
                        thisExp=thisExp, 
                        win=win, 
                        timers=[routineTimer, globalClock], 
                        currentRoutine=fixation_cross,
                    )
                    # skip the frame we paused on
                    continue
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    fixation_cross.forceEnded = routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in fixation_cross.components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "fixation_cross" ---
            for thisComponent in fixation_cross.components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # store stop times for fixation_cross
            fixation_cross.tStop = globalClock.getTime(format='float')
            fixation_cross.tStopRefresh = tThisFlipGlobal
            thisExp.addData('fixation_cross.stopped', fixation_cross.tStop)
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if fixation_cross.maxDurationReached:
                routineTimer.addTime(-fixation_cross.maxDuration)
            elif fixation_cross.forceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-0.500000)
            
            # --- Prepare to start Routine "encoding" ---
            # create an object to store info about Routine encoding
            encoding = data.Routine(
                name='encoding',
                components=[image_1, image_2, image_3, image_4, image_5],
            )
            encoding.status = NOT_STARTED
            continueRoutine = True
            # update component parameters for each repeat
            # Run 'Begin Routine' code from code
            current_images = pick_five_images()
            # Now use current_images[0..4] in your Image components
            
            # Pick one of the 5 as the target for this trial
            target_idx = random.randrange(5)          # 0..4
            target_image = current_images[target_idx]
            
            # (Optional) log what was picked
            thisExp.addData('enc_imgs', ','.join(current_images))
            thisExp.addData("enc_img1", current_images[0])
            thisExp.addData("enc_img2", current_images[1])
            thisExp.addData("enc_img3", current_images[2])
            thisExp.addData("enc_img4", current_images[3])
            thisExp.addData("enc_img5", current_images[4])
            thisExp.addData('target_image', target_image)
            thisExp.addData('target_idx', target_idx)
            image_1.setImage(current_images[0])
            image_2.setImage(current_images[1])
            image_3.setImage(current_images[2])
            image_4.setImage(current_images[3])
            image_5.setImage(current_images[4])
            # store start times for encoding
            encoding.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
            encoding.tStart = globalClock.getTime(format='float')
            encoding.status = STARTED
            thisExp.addData('encoding.started', encoding.tStart)
            encoding.maxDuration = None
            # keep track of which components have finished
            encodingComponents = encoding.components
            for thisComponent in encoding.components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "encoding" ---
            encoding.forceEnded = routineForceEnded = not continueRoutine
            while continueRoutine:
                # if trial has changed, end Routine now
                if hasattr(thisTrial, 'status') and thisTrial.status == STOPPING:
                    continueRoutine = False
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_1* updates
                
                # if image_1 is starting this frame...
                if image_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_1.frameNStart = frameN  # exact frame index
                    image_1.tStart = t  # local t and not account for scr refresh
                    image_1.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_1, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_1.started')
                    # update status
                    image_1.status = STARTED
                    image_1.setAutoDraw(True)
                
                # if image_1 is active this frame...
                if image_1.status == STARTED:
                    # update params
                    pass
                
                # if image_1 is stopping this frame...
                if image_1.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_1.tStartRefresh + duration-frameTolerance:
                        # keep track of stop time/frame for later
                        image_1.tStop = t  # not accounting for scr refresh
                        image_1.tStopRefresh = tThisFlipGlobal  # on global time
                        image_1.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_1.stopped')
                        # update status
                        image_1.status = FINISHED
                        image_1.setAutoDraw(False)
                
                # *image_2* updates
                
                # if image_2 is starting this frame...
                if image_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_2.frameNStart = frameN  # exact frame index
                    image_2.tStart = t  # local t and not account for scr refresh
                    image_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_2.started')
                    # update status
                    image_2.status = STARTED
                    image_2.setAutoDraw(True)
                
                # if image_2 is active this frame...
                if image_2.status == STARTED:
                    # update params
                    pass
                
                # if image_2 is stopping this frame...
                if image_2.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_2.tStartRefresh + duration-frameTolerance:
                        # keep track of stop time/frame for later
                        image_2.tStop = t  # not accounting for scr refresh
                        image_2.tStopRefresh = tThisFlipGlobal  # on global time
                        image_2.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_2.stopped')
                        # update status
                        image_2.status = FINISHED
                        image_2.setAutoDraw(False)
                
                # *image_3* updates
                
                # if image_3 is starting this frame...
                if image_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_3.frameNStart = frameN  # exact frame index
                    image_3.tStart = t  # local t and not account for scr refresh
                    image_3.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_3, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_3.started')
                    # update status
                    image_3.status = STARTED
                    image_3.setAutoDraw(True)
                
                # if image_3 is active this frame...
                if image_3.status == STARTED:
                    # update params
                    pass
                
                # if image_3 is stopping this frame...
                if image_3.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_3.tStartRefresh + duration-frameTolerance:
                        # keep track of stop time/frame for later
                        image_3.tStop = t  # not accounting for scr refresh
                        image_3.tStopRefresh = tThisFlipGlobal  # on global time
                        image_3.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_3.stopped')
                        # update status
                        image_3.status = FINISHED
                        image_3.setAutoDraw(False)
                
                # *image_4* updates
                
                # if image_4 is starting this frame...
                if image_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_4.frameNStart = frameN  # exact frame index
                    image_4.tStart = t  # local t and not account for scr refresh
                    image_4.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_4, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_4.started')
                    # update status
                    image_4.status = STARTED
                    image_4.setAutoDraw(True)
                
                # if image_4 is active this frame...
                if image_4.status == STARTED:
                    # update params
                    pass
                
                # if image_4 is stopping this frame...
                if image_4.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_4.tStartRefresh + duration-frameTolerance:
                        # keep track of stop time/frame for later
                        image_4.tStop = t  # not accounting for scr refresh
                        image_4.tStopRefresh = tThisFlipGlobal  # on global time
                        image_4.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_4.stopped')
                        # update status
                        image_4.status = FINISHED
                        image_4.setAutoDraw(False)
                
                # *image_5* updates
                
                # if image_5 is starting this frame...
                if image_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_5.frameNStart = frameN  # exact frame index
                    image_5.tStart = t  # local t and not account for scr refresh
                    image_5.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_5, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_5.started')
                    # update status
                    image_5.status = STARTED
                    image_5.setAutoDraw(True)
                
                # if image_5 is active this frame...
                if image_5.status == STARTED:
                    # update params
                    pass
                
                # if image_5 is stopping this frame...
                if image_5.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_5.tStartRefresh + duration-frameTolerance:
                        # keep track of stop time/frame for later
                        image_5.tStop = t  # not accounting for scr refresh
                        image_5.tStopRefresh = tThisFlipGlobal  # on global time
                        image_5.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_5.stopped')
                        # update status
                        image_5.status = FINISHED
                        image_5.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                # pause experiment here if requested
                if thisExp.status == PAUSED:
                    pauseExperiment(
                        thisExp=thisExp, 
                        win=win, 
                        timers=[routineTimer, globalClock], 
                        currentRoutine=encoding,
                    )
                    # skip the frame we paused on
                    continue
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    encoding.forceEnded = routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in encoding.components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "encoding" ---
            for thisComponent in encoding.components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # store stop times for encoding
            encoding.tStop = globalClock.getTime(format='float')
            encoding.tStopRefresh = tThisFlipGlobal
            thisExp.addData('encoding.stopped', encoding.tStop)
            # the Routine "encoding" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "maintenance" ---
            # create an object to store info about Routine maintenance
            maintenance = data.Routine(
                name='maintenance',
                components=[mask],
            )
            maintenance.status = NOT_STARTED
            continueRoutine = True
            # update component parameters for each repeat
            # store start times for maintenance
            maintenance.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
            maintenance.tStart = globalClock.getTime(format='float')
            maintenance.status = STARTED
            thisExp.addData('maintenance.started', maintenance.tStart)
            maintenance.maxDuration = None
            # keep track of which components have finished
            maintenanceComponents = maintenance.components
            for thisComponent in maintenance.components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "maintenance" ---
            maintenance.forceEnded = routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 1.0:
                # if trial has changed, end Routine now
                if hasattr(thisTrial, 'status') and thisTrial.status == STOPPING:
                    continueRoutine = False
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *mask* updates
                
                # if mask is starting this frame...
                if mask.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    mask.frameNStart = frameN  # exact frame index
                    mask.tStart = t  # local t and not account for scr refresh
                    mask.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(mask, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'mask.started')
                    # update status
                    mask.status = STARTED
                    mask.setAutoDraw(True)
                
                # if mask is active this frame...
                if mask.status == STARTED:
                    # update params
                    pass
                
                # if mask is stopping this frame...
                if mask.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > mask.tStartRefresh + 1.0-frameTolerance:
                        # keep track of stop time/frame for later
                        mask.tStop = t  # not accounting for scr refresh
                        mask.tStopRefresh = tThisFlipGlobal  # on global time
                        mask.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'mask.stopped')
                        # update status
                        mask.status = FINISHED
                        mask.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                # pause experiment here if requested
                if thisExp.status == PAUSED:
                    pauseExperiment(
                        thisExp=thisExp, 
                        win=win, 
                        timers=[routineTimer, globalClock], 
                        currentRoutine=maintenance,
                    )
                    # skip the frame we paused on
                    continue
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    maintenance.forceEnded = routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in maintenance.components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "maintenance" ---
            for thisComponent in maintenance.components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # store stop times for maintenance
            maintenance.tStop = globalClock.getTime(format='float')
            maintenance.tStopRefresh = tThisFlipGlobal
            thisExp.addData('maintenance.stopped', maintenance.tStop)
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if maintenance.maxDurationReached:
                routineTimer.addTime(-maintenance.maxDuration)
            elif maintenance.forceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-1.000000)
            
            # --- Prepare to start Routine "retrieval" ---
            # create an object to store info about Routine retrieval
            retrieval = data.Routine(
                name='retrieval',
                components=[image_left, image_right, image_center, retrieval_answer],
            )
            retrieval.status = NOT_STARTED
            continueRoutine = True
            # update component parameters for each repeat
            # Run 'Begin Routine' code from code_2
            '''# Ensure target_image and current_images are coming from the previous routine
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
            thisExp.addData('correct_side', correct_side)
            '''
            # Safety checks
            if not current_images or target_image is None:
                raise RuntimeError("Retrieval stage did not receive current_images/target_image from encoding.")
            
            # Build a foil that wasn't shown in encoding
            foil_image = pick_foil(current_images)
            
            # Reset display variables each trial
            image_left_file  = None
            image_right_file = None
            image_center_file = None
            left_opacity = right_opacity = center_opacity = 0.0
            correct_side = None
            center_is_target = None
            
            # ---- Branch by task type ----
            t = str(task).strip()  # from block_settings.xlsx column 'task'
            
            if t == "matching_to_sample_2":
                # 2-AFC: target vs foil; correct = where the target is
                if random.random() < 0.5:
                    image_left_file  = target_image
                    image_right_file = foil_image
                    correct_side = "left"
                else:
                    image_left_file  = foil_image
                    image_right_file = target_image
                    correct_side = "right"
                left_opacity = right_opacity = 1.0
                center_opacity = 0.0
            
            elif t == "non_matching_to_sample_2":
                # 2-AFC: target vs foil; correct = where the FOIL is (the one NOT shown)
                if random.random() < 0.5:
                    image_left_file  = target_image
                    image_right_file = foil_image
                    correct_side = "right"   # foil on right is correct
                else:
                    image_left_file  = foil_image
                    image_right_file = target_image
                    correct_side = "left"    # foil on left is correct
                left_opacity = right_opacity = 1.0
                center_opacity = 0.0
            
            elif t == "matching_to_sample_1":
                # 1-AFC: show a single image (target or foil) in the center
                # key '1' = yes (was shown), '0' = no (wasn't shown)
                if random.random() < 0.5:
                    image_center_file = target_image
                    center_is_target = True
                else:
                    image_center_file = foil_image
                    center_is_target = False
                center_opacity = 1.0
                left_opacity = right_opacity = 0.0
            
            else:
                raise RuntimeError(f"Unknown task value: {t}")
            
            # (Optional) logging
            thisExp.addData('retr_task', t)
            thisExp.addData('retr_target', target_image)
            thisExp.addData('retr_foil', foil_image)
            if t.endswith('_2'): thisExp.addData('correct_side', correct_side)
            if t.endswith('_1'): thisExp.addData('center_is_target', int(bool(center_is_target)))
            
            thisExp.addData('target_image', target_image)
            thisExp.addData('foil_image', foil_image)
            thisExp.addData('correct_side', correct_side)
            image_left.setOpacity(left_opacity)
            image_left.setImage(image_left_file)
            image_right.setOpacity(right_opacity)
            image_right.setImage(image_right_file)
            image_center.setOpacity(center_opacity)
            image_center.setImage(image_center_file)
            # create starting attributes for retrieval_answer
            retrieval_answer.keys = []
            retrieval_answer.rt = []
            _retrieval_answer_allKeys = []
            # store start times for retrieval
            retrieval.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
            retrieval.tStart = globalClock.getTime(format='float')
            retrieval.status = STARTED
            thisExp.addData('retrieval.started', retrieval.tStart)
            retrieval.maxDuration = None
            # keep track of which components have finished
            retrievalComponents = retrieval.components
            for thisComponent in retrieval.components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "retrieval" ---
            retrieval.forceEnded = routineForceEnded = not continueRoutine
            while continueRoutine:
                # if trial has changed, end Routine now
                if hasattr(thisTrial, 'status') and thisTrial.status == STOPPING:
                    continueRoutine = False
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_left* updates
                
                # if image_left is starting this frame...
                if image_left.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_left.frameNStart = frameN  # exact frame index
                    image_left.tStart = t  # local t and not account for scr refresh
                    image_left.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_left, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_left.started')
                    # update status
                    image_left.status = STARTED
                    image_left.setAutoDraw(True)
                
                # if image_left is active this frame...
                if image_left.status == STARTED:
                    # update params
                    pass
                
                # *image_right* updates
                
                # if image_right is starting this frame...
                if image_right.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_right.frameNStart = frameN  # exact frame index
                    image_right.tStart = t  # local t and not account for scr refresh
                    image_right.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_right, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_right.started')
                    # update status
                    image_right.status = STARTED
                    image_right.setAutoDraw(True)
                
                # if image_right is active this frame...
                if image_right.status == STARTED:
                    # update params
                    pass
                
                # *image_center* updates
                
                # if image_center is starting this frame...
                if image_center.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_center.frameNStart = frameN  # exact frame index
                    image_center.tStart = t  # local t and not account for scr refresh
                    image_center.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_center, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_center.started')
                    # update status
                    image_center.status = STARTED
                    image_center.setAutoDraw(True)
                
                # if image_center is active this frame...
                if image_center.status == STARTED:
                    # update params
                    pass
                
                # *retrieval_answer* updates
                waitOnFlip = False
                
                # if retrieval_answer is starting this frame...
                if retrieval_answer.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    retrieval_answer.frameNStart = frameN  # exact frame index
                    retrieval_answer.tStart = t  # local t and not account for scr refresh
                    retrieval_answer.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(retrieval_answer, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'retrieval_answer.started')
                    # update status
                    retrieval_answer.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(retrieval_answer.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(retrieval_answer.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if retrieval_answer.status == STARTED and not waitOnFlip:
                    theseKeys = retrieval_answer.getKeys(keyList=['1', '0'], ignoreKeys=["escape"], waitRelease=False)
                    _retrieval_answer_allKeys.extend(theseKeys)
                    if len(_retrieval_answer_allKeys):
                        retrieval_answer.keys = _retrieval_answer_allKeys[-1].name  # just the last key pressed
                        retrieval_answer.rt = _retrieval_answer_allKeys[-1].rt
                        retrieval_answer.duration = _retrieval_answer_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                # pause experiment here if requested
                if thisExp.status == PAUSED:
                    pauseExperiment(
                        thisExp=thisExp, 
                        win=win, 
                        timers=[routineTimer, globalClock], 
                        currentRoutine=retrieval,
                    )
                    # skip the frame we paused on
                    continue
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    retrieval.forceEnded = routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in retrieval.components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "retrieval" ---
            for thisComponent in retrieval.components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # store stop times for retrieval
            retrieval.tStop = globalClock.getTime(format='float')
            retrieval.tStopRefresh = tThisFlipGlobal
            thisExp.addData('retrieval.stopped', retrieval.tStop)
            # Run 'End Routine' code from code_2
            # Suppose your Keyboard component is named 'retrieval_answer'
            # Map '1' -> left, '0' -> right
            '''
            resp_key = retrieval_answer.keys  # '1' or '0' or None
            chosen_side = 'left' if resp_key == '1' else ('right' if resp_key == '0' else 'none')
            is_correct = int(chosen_side == correct_side)
            
            # Log
            thisExp.addData('resp_key', resp_key)
            thisExp.addData('chosen_side', chosen_side)
            thisExp.addData('is_correct', is_correct)
            
            '''
            resp_key = retrieval_answer.keys  # '1' or '0' (or None if no response)
            chosen_side = None
            is_correct = None
            
            t = str(task).strip()
            
            if t in ("matching_to_sample_2", "non_matching_to_sample_2"):
                # Map '1' -> left, '0' -> right
                if resp_key == '1':
                    chosen_side = 'left'
                elif resp_key == '0':
                    chosen_side = 'right'
                else:
                    chosen_side = 'none'
                is_correct = int(chosen_side == correct_side)
            
            elif t == "matching_to_sample_1":
                # Map '1' -> yes (was shown), '0' -> no (wasn't shown)
                if resp_key in ('1','0'):
                    said_yes = (resp_key == '1')
                    is_correct = int(bool(center_is_target) == said_yes)
                else:
                    is_correct = 0  # or None if you prefer
            
            # (Optional) add detailed logs
            
            thisExp.addData('chosen_side', chosen_side if chosen_side else '')
            thisExp.addData('is_correct', is_correct)
            
            # check responses
            if retrieval_answer.keys in ['', [], None]:  # No response was made
                retrieval_answer.keys = None
            trials.addData('retrieval_answer.keys',retrieval_answer.keys)
            if retrieval_answer.keys != None:  # we had a response
                trials.addData('retrieval_answer.rt', retrieval_answer.rt)
                trials.addData('retrieval_answer.duration', retrieval_answer.duration)
            # the Routine "retrieval" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "confidence" ---
            # create an object to store info about Routine confidence
            confidence = data.Routine(
                name='confidence',
                components=[confidence_text, confidence_answer],
            )
            confidence.status = NOT_STARTED
            continueRoutine = True
            # update component parameters for each repeat
            # create starting attributes for confidence_answer
            confidence_answer.keys = []
            confidence_answer.rt = []
            _confidence_answer_allKeys = []
            # store start times for confidence
            confidence.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
            confidence.tStart = globalClock.getTime(format='float')
            confidence.status = STARTED
            thisExp.addData('confidence.started', confidence.tStart)
            confidence.maxDuration = None
            # keep track of which components have finished
            confidenceComponents = confidence.components
            for thisComponent in confidence.components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "confidence" ---
            confidence.forceEnded = routineForceEnded = not continueRoutine
            while continueRoutine:
                # if trial has changed, end Routine now
                if hasattr(thisTrial, 'status') and thisTrial.status == STOPPING:
                    continueRoutine = False
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *confidence_text* updates
                
                # if confidence_text is starting this frame...
                if confidence_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    confidence_text.frameNStart = frameN  # exact frame index
                    confidence_text.tStart = t  # local t and not account for scr refresh
                    confidence_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(confidence_text, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'confidence_text.started')
                    # update status
                    confidence_text.status = STARTED
                    confidence_text.setAutoDraw(True)
                
                # if confidence_text is active this frame...
                if confidence_text.status == STARTED:
                    # update params
                    pass
                
                # *confidence_answer* updates
                waitOnFlip = False
                
                # if confidence_answer is starting this frame...
                if confidence_answer.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    confidence_answer.frameNStart = frameN  # exact frame index
                    confidence_answer.tStart = t  # local t and not account for scr refresh
                    confidence_answer.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(confidence_answer, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'confidence_answer.started')
                    # update status
                    confidence_answer.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(confidence_answer.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(confidence_answer.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if confidence_answer.status == STARTED and not waitOnFlip:
                    theseKeys = confidence_answer.getKeys(keyList=['1', '2', '3', '4'], ignoreKeys=["escape"], waitRelease=False)
                    _confidence_answer_allKeys.extend(theseKeys)
                    if len(_confidence_answer_allKeys):
                        confidence_answer.keys = _confidence_answer_allKeys[-1].name  # just the last key pressed
                        confidence_answer.rt = _confidence_answer_allKeys[-1].rt
                        confidence_answer.duration = _confidence_answer_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                # pause experiment here if requested
                if thisExp.status == PAUSED:
                    pauseExperiment(
                        thisExp=thisExp, 
                        win=win, 
                        timers=[routineTimer, globalClock], 
                        currentRoutine=confidence,
                    )
                    # skip the frame we paused on
                    continue
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    confidence.forceEnded = routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in confidence.components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "confidence" ---
            for thisComponent in confidence.components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # store stop times for confidence
            confidence.tStop = globalClock.getTime(format='float')
            confidence.tStopRefresh = tThisFlipGlobal
            thisExp.addData('confidence.stopped', confidence.tStop)
            # check responses
            if confidence_answer.keys in ['', [], None]:  # No response was made
                confidence_answer.keys = None
            trials.addData('confidence_answer.keys',confidence_answer.keys)
            if confidence_answer.keys != None:  # we had a response
                trials.addData('confidence_answer.rt', confidence_answer.rt)
                trials.addData('confidence_answer.duration', confidence_answer.duration)
            # the Routine "confidence" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            # mark thisTrial as finished
            if hasattr(thisTrial, 'status'):
                thisTrial.status = FINISHED
            # if awaiting a pause, pause now
            if trials.status == PAUSED:
                thisExp.status = PAUSED
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[globalClock], 
                )
                # once done pausing, restore running status
                trials.status = STARTED
            thisExp.nextEntry()
            
        # completed 5.0 repeats of 'trials'
        trials.status = FINISHED
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        
        # --- Prepare to start Routine "pause" ---
        # create an object to store info about Routine pause
        pause = data.Routine(
            name='pause',
            components=[text_2, pause_next],
        )
        pause.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # create starting attributes for pause_next
        pause_next.keys = []
        pause_next.rt = []
        _pause_next_allKeys = []
        # store start times for pause
        pause.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        pause.tStart = globalClock.getTime(format='float')
        pause.status = STARTED
        thisExp.addData('pause.started', pause.tStart)
        pause.maxDuration = None
        # keep track of which components have finished
        pauseComponents = pause.components
        for thisComponent in pause.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "pause" ---
        pause.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisCondition_block, 'status') and thisCondition_block.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_2* updates
            
            # if text_2 is starting this frame...
            if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_2.frameNStart = frameN  # exact frame index
                text_2.tStart = t  # local t and not account for scr refresh
                text_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_2.started')
                # update status
                text_2.status = STARTED
                text_2.setAutoDraw(True)
            
            # if text_2 is active this frame...
            if text_2.status == STARTED:
                # update params
                pass
            
            # *pause_next* updates
            waitOnFlip = False
            
            # if pause_next is starting this frame...
            if pause_next.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                pause_next.frameNStart = frameN  # exact frame index
                pause_next.tStart = t  # local t and not account for scr refresh
                pause_next.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(pause_next, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'pause_next.started')
                # update status
                pause_next.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(pause_next.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(pause_next.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if pause_next.status == STARTED and not waitOnFlip:
                theseKeys = pause_next.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _pause_next_allKeys.extend(theseKeys)
                if len(_pause_next_allKeys):
                    pause_next.keys = _pause_next_allKeys[-1].name  # just the last key pressed
                    pause_next.rt = _pause_next_allKeys[-1].rt
                    pause_next.duration = _pause_next_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=pause,
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                pause.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in pause.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "pause" ---
        for thisComponent in pause.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for pause
        pause.tStop = globalClock.getTime(format='float')
        pause.tStopRefresh = tThisFlipGlobal
        thisExp.addData('pause.stopped', pause.tStop)
        # check responses
        if pause_next.keys in ['', [], None]:  # No response was made
            pause_next.keys = None
        condition_block.addData('pause_next.keys',pause_next.keys)
        if pause_next.keys != None:  # we had a response
            condition_block.addData('pause_next.rt', pause_next.rt)
            condition_block.addData('pause_next.duration', pause_next.duration)
        # the Routine "pause" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        # mark thisCondition_block as finished
        if hasattr(thisCondition_block, 'status'):
            thisCondition_block.status = FINISHED
        # if awaiting a pause, pause now
        if condition_block.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            condition_block.status = STARTED
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'condition_block'
    condition_block.status = FINISHED
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "end" ---
    # create an object to store info about Routine end
    end = data.Routine(
        name='end',
        components=[end_block, end_experiment],
    )
    end.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for end_experiment
    end_experiment.keys = []
    end_experiment.rt = []
    _end_experiment_allKeys = []
    # store start times for end
    end.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    end.tStart = globalClock.getTime(format='float')
    end.status = STARTED
    thisExp.addData('end.started', end.tStart)
    end.maxDuration = None
    # keep track of which components have finished
    endComponents = end.components
    for thisComponent in end.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "end" ---
    end.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *end_block* updates
        
        # if end_block is starting this frame...
        if end_block.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            end_block.frameNStart = frameN  # exact frame index
            end_block.tStart = t  # local t and not account for scr refresh
            end_block.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(end_block, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'end_block.started')
            # update status
            end_block.status = STARTED
            end_block.setAutoDraw(True)
        
        # if end_block is active this frame...
        if end_block.status == STARTED:
            # update params
            pass
        
        # if end_block is stopping this frame...
        if end_block.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > end_block.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                end_block.tStop = t  # not accounting for scr refresh
                end_block.tStopRefresh = tThisFlipGlobal  # on global time
                end_block.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'end_block.stopped')
                # update status
                end_block.status = FINISHED
                end_block.setAutoDraw(False)
        
        # *end_experiment* updates
        waitOnFlip = False
        
        # if end_experiment is starting this frame...
        if end_experiment.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            end_experiment.frameNStart = frameN  # exact frame index
            end_experiment.tStart = t  # local t and not account for scr refresh
            end_experiment.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(end_experiment, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'end_experiment.started')
            # update status
            end_experiment.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(end_experiment.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(end_experiment.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if end_experiment.status == STARTED and not waitOnFlip:
            theseKeys = end_experiment.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _end_experiment_allKeys.extend(theseKeys)
            if len(_end_experiment_allKeys):
                end_experiment.keys = _end_experiment_allKeys[-1].name  # just the last key pressed
                end_experiment.rt = _end_experiment_allKeys[-1].rt
                end_experiment.duration = _end_experiment_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=end,
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            end.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in end.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "end" ---
    for thisComponent in end.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for end
    end.tStop = globalClock.getTime(format='float')
    end.tStopRefresh = tThisFlipGlobal
    thisExp.addData('end.stopped', end.tStop)
    # check responses
    if end_experiment.keys in ['', [], None]:  # No response was made
        end_experiment.keys = None
    thisExp.addData('end_experiment.keys',end_experiment.keys)
    if end_experiment.keys != None:  # we had a response
        thisExp.addData('end_experiment.rt', end_experiment.rt)
        thisExp.addData('end_experiment.duration', end_experiment.duration)
    thisExp.nextEntry()
    # the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # run any 'at exit' functions
    for fcn in runAtExit:
        fcn()
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
