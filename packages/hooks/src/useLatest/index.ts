/*
 * @Author: Jack11023 1018719623@qq.com
 * @Date: 2023-08-23 13:24:56
 * @LastEditors: Jack11023 1018719623@qq.com
 * @LastEditTime: 2023-08-27 15:12:06
 * @FilePath: \encode-hooks-1.0c:\Users\MS\Desktop\project\PnpmReact\packages\hooks\src\useLatest\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useRef } from 'react';

function useLatest<T>(value: T): any {
  const ref = useRef(value);

  ref.current = value;
  return ref;
}
export default useLatest;
