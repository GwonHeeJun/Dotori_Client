import produce from 'immer';
import * as User from 'Actions/User.action';

const dummyData = {
    pid: '0101001',
    email: 's19062@gsm.hs.kr',
    name: '권희준',
    grade: '2',
    class: '3',
    number: '3',
    suspended_until: new Date(),
    created_at: new Date(),
    updated_at: new Date(),
};

type userType = {
    pid: String;
    email: String;
    name: String;
    grade?: String;
    class?: String;
    number?: String;
    suspended_until: Date;
    created_at?: Date;
    updated_at?: Date;
}

type initialStateType = Readonly<{
    user: userType | null;
    isLoggedIn: Boolean;
    isLoggingIn: Boolean;
    isLoggingOut: Boolean;
    loginError: String;
    userType: String;
    isSignedUp: Boolean;
    isSigningUp: Boolean;
    registError: String;
}>;

const initialState: initialStateType = {
    user: null, // 내 정보
    isLoggedIn: false, // 로그인 했는 지?
    isLoggingIn: false, // 로그인 시도 중인지?
    isLoggingOut: false, // 로그아웃 시도 중인지?
    loginError: '', // 로그인 에러 사유,

    userType: '', // 로그인하는 유저의 타입

    isSignedUp: false, // 회원가입 했는 지?
    isSigningUp: false, // 회원가입 시도 중인지?
    registError: '', // 회원가입 에러 사유
};

export default (state: initialStateType = initialState, action: any) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case User.CHOOSE_STUDENT: {
                draft.userType = '학생'
                break;
            }
            case User.CHOOSE_TEACHER: {
                draft.userType = '사감'
                break;
            }
            case User.LOG_IN_REQUEST: {
                draft.isLoggingIn = true;
                draft.isLoggedIn = false;
                draft.loginError = '';
                break;
            }
            case User.LOG_IN_SUCCESS: {
                draft.user = dummyData;
                draft.isLoggingIn = false;
                draft.isLoggedIn = true;
                break;
            }
            case User.LOG_IN_FAILURE: {
                draft.user = null;
                draft.isLoggingIn = false;
                draft.isLoggedIn = false;
                draft.loginError = action.error;
                break;
            }
            case User.SIGN_UP_REQUEST: {
                draft.isSignedUp = false;
                draft.isSigningUp = true;
                draft.loginError = '';
                break;
            }
            case User.SIGN_UP_SUCCESS: {
                draft.isSigningUp = false;
                draft.isSignedUp = true;
                break;
            }
            case User.SIGN_UP_FAILURE: {
                draft.isSignedUp = true;
                draft.isSigningUp = false;
                draft.registError = action.error;
                break;
            }
            default: {
                break;
            }
        }
    });
};
