import { ClientFunction, Selector } from 'testcafe';

import { compareState, prepareClient, setName, setRoomState, setupTestEnvironment } from './test-util.js';

setupTestEnvironment();

test('Create game using edit mode', async t => {
  const [width,height] = await t.eval(() => [window.innerWidth,window.innerHeight]);
  if(width<=960||height<=520)
    await t.resizeWindow(width>960?width:980,height>520?height:540);
  await setRoomState();
  await ClientFunction(prepareClient)();
  await setName(t);
  await t
    .click('#addButton')
    .click('#add-spinner0')
    .typeText('#INPUT_\\;values', '8')
    .click('#buttonInputGo')
    .click('#w_2ng4')
    .click('#addButton')
    .click('#add-holder')
    .click('#addButton')
    .click('#addHand')
    .drag('#w_hand', 100, -100) // this shouldn't change anything because it's not movable
    .click('#editButton')
    .click('#w_hand')
    .click('#transparentHolder')
    .click('#updateWidget')
    .click('#activeGameButton')
    .click('#addButton')
    .click('#add-deck_K_S')
    .click('#w_9ee9B')
    .click('#w_9ee9P > .handle')
    .click('#pileOverlay .modal > div:nth-of-type(6) > button')
    .click('#w_b86p > .handle')
    .click('#pileOverlay .modal > div:nth-of-type(3) > button')
    .click('#w_b86p > .handle')
    .click('#pileOverlay .modal > div:nth-of-type(6) > button')
    .click('#w_5ip4 > .handle')
    .click('#pileOverlay .modal > div:nth-of-type(4) > button')
    .dragToElement('#w_5ip4 > .handle', '#w_hand')
    .click('#editButton')
    .click('#w_2ng4')
    .click('#duplicateWidget')
    .click('#w_2ng5')
    .click('#manualEdit')
    .typeText('#editWidgetJSON', '{"type":"spinner","options":[1,2],"angle": 5,"id": "2ng5"}', { replace: true })
    .click('#editJSONoverlay #updateWidget')
    .click('#w_2ng4')
    .setNativeDialogHandler(() => true)
    .click('#removeWidget')
    .click('#activeGameButton')
    .click('#addButton')
    .click('#add-2D-chips')
    .click('#addButton')
    .click('#EmptyPoker3DSVG')
    .click('#w_es5b')
    .click('#addButton')
    .click('#addSeat')
    .click('#addButton')
    .click('#addSeatCounter')
    .click('#addButton')
    .click('#addScoreboard')
    .click('#w_m06r')
    .click('#addButton')
    .click('#add-dice2D0')
    .typeText('#INPUT_\\;sides', '8', { replace: true })
    .click('#buttonInputGo')
    .click('#w_8sfj')
    .click('#addButton')
    .click('#add-dice3D0')
    .typeText('#INPUT_\\;sides', '12', { replace: true })
    .click('#buttonInputGo')
    .click('#w_bldn');
  await t.resizeWindow(width,height);
  await compareState(t, '98fcb4082874abd0f47d516eb2258aa6');
});
