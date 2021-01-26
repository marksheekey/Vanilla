import {ActionType, createAction} from 'typesafe-actions';

export const onShowAvailabilityChange = createAction('filter/ON_AVAILABILITY_CHANGE')<boolean>()
export const onShowBreakChange = createAction('filter/ON_SHOW_BREAK_CHANGE')<boolean>()
export const onShowEmptyDaysChange = createAction('filter/ON_SHOW_EMPTY_DAYS_CHANGE')<boolean>()
export const onShowAvatarChange = createAction('filter/ON_SHOW_AVATAR_CHANGE')<boolean>()
export const onLocationChange = createAction('filter/ON_LOCATION_CHANGE')<number>()
export const onDateChange = createAction('filter/ON_DATE_CHANGE')<string>()

export type FilterActions = ActionType<typeof onShowAvailabilityChange> | ActionType<typeof onShowBreakChange> |  ActionType<typeof onShowEmptyDaysChange> |
  ActionType<typeof onShowAvatarChange> | ActionType<typeof onLocationChange> | ActionType<typeof onDateChange>
