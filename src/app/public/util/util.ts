export class Util {
    static loadScript(src: string) {
        let node = document.createElement('script');
        node.src = src;
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }
}