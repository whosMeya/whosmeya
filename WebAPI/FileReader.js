// https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader
/**
 * FileReader
 * FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。
 *
 * 其中File对象可以是来自用户在一个<input>元素上选择文件后返回的FileList对象,
 *  也可以来自拖放操作生成的 DataTransfer对象,
 *  还可以是来自在一个HTMLCanvasElement上执行mozGetAsFile()方法后返回结果。
 *
 * 重要提示： FileReader仅用于以安全的方式从用户（远程）系统读取文件内容 它不能用于从文件系统中按路径名简单地读取文件。
 *  要在JavaScript中按路径名读取文件，应使用标准Ajax解决方案进行服务器端文件读取，如果读取跨域，则使用CORS权限。
 */


/**
 * 构造函数
 * FileReader
 */


/**
 * 属性
 */
FileReader.error // 只读
// 一个DOMException，表示在读取文件时发生的错误 。
FileReader.readyState // 只读
// 表示FileReader状态的数字。取值如下：
// EMPTY	  0	还没有加载任何数据.
// LOADING	1	数据正在被加载.
// DONE   	2	已完成全部的读取请求.

FileReader.result // 只读
// 文件的内容。该属性仅在读取操作完成后才有效，数据的格式取决于使用哪个方法来启动读取操作。

/** 事件处理 */
FileReader.onabort
// 处理abort事件。该事件在读取操作被中断时触发。
FileReader.onerror
// 处理error事件。该事件在读取操作发生错误时触发。
FileReader.onload
// 处理load事件。该事件在读取操作完成时触发。
FileReader.onloadstart
// 处理loadstart事件。该事件在读取操作开始时触发。
FileReader.onloadend
// 处理loadend事件。该事件在读取操作结束时（要么成功，要么失败）触发。
FileReader.onprogress
// 处理progress事件。该事件在读取Blob时触发。


/**
 * 方法
 */
FileReader.abort()
// 中止读取操作。在返回时，readyState属性为DONE。
FileReader.readAsArrayBuffer()
// 开始读取指定的 Blob中的内容, 一旦完成, result 属性中保存的将是被读取文件的 ArrayBuffer 数据对象.
FileReader.readAsBinaryString()
// 开始读取指定的Blob中的内容。一旦完成，result属性中将包含所读取文件的原始二进制数据。
FileReader.readAsDataURL()
// 开始读取指定的Blob中的内容。一旦完成，result属性中将包含一个data: URL格式的Base64字符串以表示所读取文件的内容。
FileReader.readAsText()
// 开始读取指定的Blob中的内容。一旦完成，result属性中将包含一个字符串以表示所读取的文件内容。





// 一个文件上传的回调 <input type="file" onchange="onChange(event)">
function onChange(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function (event) {
    // 文件里的文本会在这里被打印出来
    console.log(event.target.result)
  };

  reader.readAsText(file);
}

