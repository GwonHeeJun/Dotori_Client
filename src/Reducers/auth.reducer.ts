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
    loginProcess: 'inProgress' | 'success' | 'failure' | 'nope';
    isLoggingOut: Boolean;
    loginError: String;
    userType: String;
    singUpProcess: 'inProgress' | 'success' | 'failure' | 'nope';
    registError: String;
}>;

const initialState: initialStateType = {
    user: null, // 내 정보
    loginProcess: 'nope', // 로그인 했는 지?
    isLoggingOut: false, // 로그아웃 시도 중인지?
    loginError: '', // 로그인 에러 사유,
    userType: '', // 로그인하는 유저의 타입
    singUpProcess: 'nope', // 회원가입 했는 지?
    registError: '', // 회원가입 에러 사유
};

export default (state: initialStateType = initialState, action: any) => {
    return produce(state, (draft) => {
        switch (action.type) {
            // 로그인 유저 타입 선택 ↓
            case User.CHANGE_USER_TYPE: {
                draft.userType = action.payload;
                break;
            }
            // 로그인 , Saga와 연결 ↓
            case User.LOG_IN_REQUEST: {
                draft.loginProcess = 'inProgress';
                draft.loginError = '';
                break;
            }
            case User.LOG_IN_SUCCESS: {
                draft.user = dummyData;
                draft.loginProcess = 'success';
                break;
            }
            case User.LOG_IN_FAILURE: {
                draft.user = null;
                draft.loginProcess = 'failure';
                draft.loginError = action.error;
                break;
            }
            // 회원가입 , Saga와 연결 ↓
            case User.SIGN_UP_REQUEST: {
                draft.singUpProcess = 'inProgress';
                draft.loginError = '';
                break;
            }
            case User.SIGN_UP_SUCCESS: {
                draft.singUpProcess = 'success';
                break;
            }
            case User.SIGN_UP_FAILURE: {
                draft.singUpProcess = 'failure';
                draft.registError = action.error;
                break;
            }
            // 모든 Auth Process 초기화 ↓
            case User.RESET_AUTH_PROCESS: {
                draft.loginProcess = 'nope';
                draft.singUpProcess = 'nope';
                break;
            }
            default: {
                break;
            }
        }
    });
};
