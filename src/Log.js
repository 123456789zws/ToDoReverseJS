class Log
{
    open;
    
    constructor(open=true)
    {
        this.open = open
    }

    /**
     * 控制打印
     * @param {string} content 
     * @param {string} mode 
     * @returns 
     */
    #print(content, mode)
    {
        if (this.open == false) return;

        switch (mode) {
            case "error":
                console.error(content)
                break;
            default:
                console.log(content);
                break;
        }
    }

    /**
     * @param {*} message 
     */
    debug(message)
    {
        let content = `[debug] ${message}`;
        this.#print(content, "debug");
    }

    /**
     * @param {*} message 
     */
    error(message)
    {
        let content = `[error] ${message}`;
        this.#print(content, error);
    }
    
    
    /**
     * 自定义标签
     * @param {string} label 
     * @param {*} message 
     */
    log(label="debug", message="")
    {
        let content = `[${label}] ${message}`;
        this.#print(content, "log");
    }
}

export { Log };