import { action, observable } from "mobx";
import storage from "@/utils/storage.ts"
import zhCN from "@/langauge/CN.ts"
import enUS from "@/langauge/US.ts"

type MessageType = {
    [key: string]: any
}

const message: MessageType = {
    'en': enUS,
    'zh': zhCN,
}

class Language {
    @observable defaultLanguage: any = message[storage.session.get('locale') || 'zh'];
    @observable locale: string = storage.session.get('locale') || 'zh';

    @action changeLanguage = (language: string) => {
        storage.session.set('locale', language)
        this.locale = language;
        this.defaultLanguage = message[language];
    }
}

export default Language;