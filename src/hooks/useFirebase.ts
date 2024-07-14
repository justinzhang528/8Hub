import {getDatabase, ref as databaseRef, set, get, child, remove, onValue} from "firebase/database";
import {dataResponse} from "@/enum/enum";
import {initializeApp} from "firebase/app";

export default function () {
    const initializeFirebase = () => {
        const firebaseConfig = {
            apiKey: "AIzaSyBTMRpCWr7Aay0Whm02LUMKKCUIZqRfK5U",
            authDomain: "hub-78ecf.firebaseapp.com",
            databaseURL: "https://hub-78ecf-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "hub-78ecf",
            storageBucket: "hub-78ecf.appspot.com",
            messagingSenderId: "824874175174",
            appId: "1:824874175174:web:c3c1317df0ea77bdcaa5c7",
        };

        initializeApp(firebaseConfig);
    }

    const upSertUser = (name: string, password: string, email: string, createOn: number = new Date().getTime()): Promise<any> => {
        return new Promise((resolve, reject) => {
            const db = getDatabase();
            set(databaseRef(db, 'Account/' + email.replace('.','')), {
                name: name,
                password: password,
                email: email,
                createdOn: createOn,
            }).then(() => {
                resolve({
                    errorCode: dataResponse.SUCCESS,
                    data: null
                });
            }).catch((error) => {
                reject({
                    errorCode: dataResponse.ERROR,
                    data: error
                });
            });
        });
    }

    const getUser = (email: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            const dbRef = databaseRef(getDatabase());
            get(child(dbRef, `Account/${email}`))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        resolve({
                            errorCode: dataResponse.SUCCESS,
                            data: snapshot.val()
                        });
                    } else {
                        resolve({
                            errorCode: dataResponse.NO_DATA,
                            data: null
                        });
                    }
                })
                .catch((error) => {
                    reject({
                        errorCode: dataResponse.ERROR,
                        data: error
                    });
                });
        });
    }

    const removeUser = (name: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            const db = getDatabase();
            remove(databaseRef(db, `Account/${name}`)).then(() => {
                resolve({
                    errorCode: dataResponse.SUCCESS,
                    data: null
                });
            }).catch((error) => {
                reject({
                    errorCode: dataResponse.ERROR,
                    data: error
                });
            });
        });
    }

    const getAds = (dbPath: string, name: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            const dbRef = databaseRef(getDatabase());
            get(child(dbRef, `${dbPath}/${name}`))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        resolve({
                            errorCode: dataResponse.SUCCESS,
                            data: snapshot.val()
                        });
                    } else {
                        resolve({
                            errorCode: dataResponse.NO_DATA,
                            data: null
                        });
                    }
                })
                .catch((error) => {
                    reject({
                        errorCode: dataResponse.ERROR,
                        data: error
                    });
                });
        });
    }

    const upSertAds = (dbPath: string, name: string, imgUrl: string, link: string, description: string, createdOn: number = new Date().getTime()): Promise<any> => {
        return new Promise((resolve, reject) => {
            const db = getDatabase();
            set(databaseRef(db, `${dbPath}/${name}`), {
                name: name,
                imgUrl: imgUrl,
                link: link,
                description: description,
                createdOn: createdOn
            }).then(() => {
                resolve({
                    errorCode: dataResponse.SUCCESS,
                    data: null
                });
            }).catch((error) => {
                reject({
                    errorCode: dataResponse.ERROR,
                    data: error
                });
            });
        });
    }

    const removeAds = (dbPath: string, name: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            const db = getDatabase();
            remove(databaseRef(db, `${dbPath}/${name}`)).then(() => {
                resolve({
                    errorCode: dataResponse.SUCCESS,
                    data: null
                });
            }).catch((error) => {
                reject({
                    errorCode: dataResponse.ERROR,
                    data: error
                });
            });
        });
    }

    const getAppSetting = (name: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            const dbRef = databaseRef(getDatabase());
            get(child(dbRef, `AppSetting/${name}`))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        resolve({
                            errorCode: dataResponse.SUCCESS,
                            data: snapshot.val()
                        });
                    } else {
                        resolve({
                            errorCode: dataResponse.NO_DATA,
                            data: null
                        });
                    }
                })
                .catch((error) => {
                    reject({
                        errorCode: dataResponse.ERROR,
                        data: error
                    });
                });
        });
    }

    const handleOnDBValueChange = (path: string = '',func: any) => {
        const db = getDatabase();
        return onValue(databaseRef(db, path), (snapshot) => {
            func();
        });
    }

    return {
        initializeFirebase,
        upSertUser,
        getUser,
        removeUser,
        getAds,
        upSertAds,
        removeAds,
        getAppSetting,
        handleOnDBValueChange,
    }
}