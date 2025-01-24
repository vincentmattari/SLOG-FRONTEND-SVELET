import { writable } from "svelte/store";
import { getApi, putApi, delApi, postApi } from "./service/api.js";
import { router } from "tinro";

function setCurrentArticlesPage() {}        // 게시물을 스크롤 할 때 페이지가 증가되는 부분을 다루는 스토어
function setArticles() {}                   // 서비스의 메인이 되는 스토어 게시물이 목록이 쌓여지게 되고 게시물의 수정, 삭제 등과 관련된 사용자 정의 메소드와 '좋아요'나 커멘트를 추가 했을때 상태를 변경해 주는 사용자정의 메소드
function setLoadingArticle() {}             // 게시물이 불러와 질 때 서버와의 통신중이라면 로딩상태를 표시하는 기능을 하는 스토어
function setArticleContent() {}             // 목록 형태의 여러게시물이 아닌 게시물 하나의 정보만을 담을 스토어
function setComments() {}                   // 특정 게시물의 코멘트들을 담을 스토어 /  코멘트 추가,수정,삭젝 등을 처리 하는 사용자정의 메소드
function setAuth() { // 로그인된 유저의 유저정보(id, email)를 담는 스토어 / 로그인,로그아웃,회원가입 등의 사용자정의 메소드

    //initValues를 사용하지 않고 자바스크립트 스프레드를 이용하는 이유는
    //이렇게 해야 initVaues가 참조되지 않고 복제가 되서 나중에 초기화 시킬일 있을 때 변수로 만든 initVaues를 이용해
    //초기화 시킬 수 있기 때문
    let ininValues = {
        id: '',
        email: '',
        Authorization: '',
    }    
    
    const { subscribe, set, update} = writable({...initVaues})

    const refresh = async () => { //서버로 access_token을 다시 요청하는 메소드
        try {
            const authenticationUser = await postApi({path: '/auth/refresh'})
            set(authenticationUser)
            isRefresh.set(true)
        }
        catch(err) {
            auth.resetUserInfo()
            isRefresh.set(false)
        }
    }
    const resetUserInfo = () => {   //auth스토어를 초기화 하는 메소드

    }
    const login = async() => {}
    const logout = async() => {}
    const register = async() => {}

    return {
        subscribe,
        refresh,
        login,
        logout,
        resetUserInfo,
        register,
    }
}                       
function setArticlesMode() {}               // 보기의 상태를 나타내는 스토어 / 보기모드는 모두보기, 좋아요 보기, 내글 보기 3가지 가질 예정
function setIsLogin() {}                    // 로그인 상태인지 아닌지 파악하는 스토어

export const currentArticlesPage = setCurrentArticlesPage()
export const articles = setArticles()
export const loadingArticle = setLoadingArticle()
export const articleContent = setArticleContent()
export const comments = setComments()
export const auth = setAuth()
export const articlesMode = setArticlesMode()
export const isLogin = setIsLogin()
export const isRefresh = writable(false)    //refresh상태를 기록하는 스토어
