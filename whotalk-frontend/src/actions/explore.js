import EXPLORE from './ActionTypes/explore';
import { createAction } from 'redux-actions';
import * as service from 'services/explore';

export const initialize = createAction(EXPLORE.INITIALIZE);

export const getInitialActivity = () => ({
    type: EXPLORE.GET_INITIAL_ACTIVITY,
    payload: {
        promise: service.getInitialActivity()
    }
});

export const getActivityBefore = (activityId) => ({
    type: EXPLORE.GET_ACTIVITY_BEFORE,
    payload: {
        promise: service.getActivityBefore(activityId)
    }
});