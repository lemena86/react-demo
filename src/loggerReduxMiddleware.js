export default () => next => action => {
    const {type, payload} = action;
    console.groupCollapsed(type);
    // tslint:disable-next-line
    console.log('Payload:', payload);
    console.groupEnd();

    return next(action);
};
