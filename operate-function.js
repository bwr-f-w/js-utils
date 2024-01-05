/******************************************************************************/
/** 对函数进行操作的工具 *********************************************************/
/** 简化运用函数式编程技巧时的代码，提高可读性 ***************************************/
/** !!! 注意：请确保切实理解每个函数的功能后再使用！ !!! ******************************/
/******************************************************************************/

/**
 * 用于将多个函数组合成一个的工具函数
 * @param funcs
 * @returns {function(*): *}
 * @private
 */
function _compose(...funcs) {
  return function(args) {
    return _apply(args, ...funcs);
  }
}

/**
 * 用于链式调用的工具函数
 * @param args
 * @param funcs
 * @returns {*}
 * @private
 */
function _apply(args, ...funcs) {
  var param = args;
  for(var i = 0; i < funcs.length; i++) {
    param = funcs[i](param);
  }
  return param;
}

/**
 * 用于柯里化的工具函数，
 * 需要传递除第一参数之外的其他参数
 * @param func
 * @param params
 * @returns {function(*=): *}
 * @private
 */
function _crry(func, ...params) {
  return function(arg) {
    return func(arg, ...params);
  }
}

/**
 * 惰性求值
 * @author YiJunhe
 * @date 2023/7/25
 * @contact bwr_f_w@139.com
 * @param func
 * @param params
 * @returns {function(): *}
 * @private
 */
function _promise(func, ...params) {
  return function() {
    return func(...params);
  }
}

/** 导出 ***********************************************************************/
export {
  _crry,
  _apply,
  _compose,
  _promise
}
