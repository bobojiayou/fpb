
/**
 * 默认导出fpb为_
 */
export = _;
export as namespace _;
declare let _: FpbStatic

/**
 * 
 */
declare namespace _ {

    type Many<T> = T | T[];
    /**
     * fpb 对象
     */
    interface FpbStatic {
        /**
         * 版本号
         */
        VERSION: string;
        <T>(value: T): FpbImplicitWrapper<T>;
    }
    /**
     * 
     */
    interface FpbImplicitWrapper {
        /**
         *
         * @param array The array to process.
         * @param size The length of each chunk.
         * @return Returns the new array containing chunks.
         */
        allKeys(
            value: object | null
        ): Array<string | number>
    }

}

