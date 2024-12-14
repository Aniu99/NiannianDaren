



function initengahan(){
    kadoIn.style="display:none"; // 隐藏 kadoIn 元素
    ket.style="display:none"; // 隐藏 ket 元素
    Content.style = "opacity:1;margin-top:0"; // 设置 Content 元素的透明度为1，顶部外边距为0
    bodyblur.style="opacity:.7"; // 设置背景模糊的透明度为 0.7
    wallpaper.style="transform: scale(1.5);"; // 设置背景图片的缩放比例为 1.5
}

// 开始显示名称，触发对话框动画
async function mulainama() {
    bodyblur.style="opacity:.7"; // 设置背景模糊透明度为0.7
    wallpaper.style="transform: scale(1);"; // 恢复背景图的正常缩放比例
    fotostiker.style="display:inline-flex;"; // 显示贴图元素
    setTimeout(ftmuncul, 200); // 延时 200ms 后调用 ftmuncul 函数
    setTimeout(kethalo, 500); // 延时 500ms 后调用 kethalo 函数
}

// 显示不同的贴图，根据 ftganti 的值切换贴图
function ftmuncul(){
    if(ftganti==0){fotostiker.src = deffotostiker;} // 如果 ftganti 为 0，显示默认贴图
    if(ftganti==1){fotostiker.src = fotostiker1.src;} // 如果 ftganti 为 1，显示贴图 1
    if(ftganti==2){fotostiker.src = fotostiker2.src;} // 如果 ftganti 为 2，显示贴图 2
    if(ftganti==3){fotostiker.src = fotostiker3.src;} // 如果 ftganti 为 3，显示贴图 3
    if(ftganti==4){fotostiker.src = fotostiker4.src;} // 如果 ftganti 为 4，显示贴图 4
    if(ftganti==5){fotostiker.src = fotostiker5.src;} // 如果 ftganti 为 5，显示贴图 5

    fotostiker.style="display:inline-flex;opacity:1;transform:scale(1)"; // 设置贴图显示，透明度为 1，缩放比例为 1
}

// 隐藏贴图，设置透明度为 0，并缩放至最小
function fthilang(){
    fotostiker.style="display:inline-flex;opacity:0;transition:all .7s ease;transform:scale(.1)"; // 设置透明度为 0，进行动画过渡，缩放至 0.1
}

// 开始动画效果
function jjfoto(){
    fotostiker.style.animation="rto .8s infinite alternate"; // 设置贴图的动画效果，持续循环，交替变化
}

// 显示对话框并触发文本输入
function bqmuncul(){
    bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0"; // 设置对话框样式，使其显示
    mulaiketik1(); // 开始输入文本
}

// 隐藏对话框
function bqhilang(){
    wallpaper.style="transform: scale(2);"; // 放大背景图片
    bodyblur.style="opacity:.3"; // 设置背景模糊透明度为0.3
    bq.style = "position:relative;transition:all .7s ease;"; // 对话框进行动画过渡，逐渐消失
}

// 触发文字输入动画
function kethalo(){
    new TypeIt("#halo", { // 使用 TypeIt 插件对 #halo 元素进行动态输入
        strings: ["" + vketikhalo], // 输入的文本内容
        startDelay: 50, // 开始延迟 50ms
        speed: 40, // 输入速度为 40ms/字符
        waitUntilVisible: true, // 等待元素可见后再开始输入
        afterComplete: function(){
            halo.innerHTML = vketikhalo; // 输入完成后将文本显示在元素中
            setTimeout(bqmuncul, 200); // 延时 200ms 后显示对话框
        },
    }).go();
}

// 显示按钮
function tombol(){
    wallpaper.style="transform: scale(1);"; // 恢复背景图的正常缩放比例
    Tombol.style="opacity:1;transform: scale(1);"; // 设置按钮显示，透明度为1，正常缩放
    if(fungsi==2){By.innerHTML="&#128140; 收下你的专属小蛋糕红包吧！🤩"} // 如果 fungsi 为 2，按钮内容改为 "Balas"
}

// 监听按钮点击事件
document.getElementById("By").onclick = function() {
    if(fungsi==1){ // 如果 fungsi 为 1
        Tombol.style=""; // 恢复按钮样式
        fthilang(); // 隐藏贴图
        fungsi=0; // 修改 fungsi 状态为 0
        pertanyaan(); // 调用问答函数
    }
    if(fungsi==2){ // 如果 fungsi 为 2
        Tombol.style=""; // 恢复按钮样式
        menuju(); // 调用 menuju 函数
    }
}

// 根据当前时间显示问候语
const waktuSekarang = new Date().getHours(); // 获取当前小时
let ucapan;
if(waktuSekarang < 10){ucapan = "Selamat Pagi, ";} // 早上问候
else if(waktuSekarang < 16){ucapan = "Selamat Siang, ";} // 中午问候
else if(waktuSekarang < 19){ucapan = "Selamat Sore, ";} // 下午问候
else{ucapan = "Selamat Malam, ";} // 晚上问候

vketik1 = kalimat.innerHTML; // 获取初始文本
kalimat.innerHTML = ""; // 清空文本

// 开始输入第一个文本
function mulaiketik1(){
    new TypeIt("#kalimat", {
        strings: ["" + vketik1], // 输入的文本内容
        startDelay: 400, // 开始延迟 400ms
        speed: 20, // 输入速度
        cursor: false, // 不显示光标
        deleteSpeed: 20, // 删除速度
        breakLines: false, // 不换行
        waitUntilVisible: true, // 等待元素可见后再输入
        lifelike: true, // 模拟真实输入
        afterComplete: function(){
            aktiopsL(); // 输入完成后调用 aktiopsL 函数
        },
    }).go();
}

// 监听点击事件并执行不同操作
opsLclick = 0; // 初始化点击状态
opsLcheck = 0; // 初始化选项状态
defopsL = opsL.innerHTML; // 获取初始的 opsL 内容

document.getElementById("bq").onclick = function() {
    if(opsLclick==1){ // 如果 opsLclick 为 1
        if(opsLcheck==1){setTimeout(aktipesan1,400);fthilang();ftganti=1;setTimeout(ftmuncul,300);} // 如果 opsLcheck 为 1，显示第一个消息
        if(opsLcheck==2){mulaiketik3();} // 如果 opsLcheck 为 2，显示第 3 个文本
        if(opsLcheck==3){mulaiketik4();} // 如果 opsLcheck 为 3，显示第 4 个文本
        if(opsLcheck==4){mulaiketik5();} // 如果 opsLcheck 为 4，显示第 5 个文本
        if(opsLcheck==5){kethalo2();} // 如果 opsLcheck 为 5，显示问候
        otomatis(); // 自动化处理
        opsL.style.opacity="0"; // 隐藏 opsL 元素
        opsLclick=0; // 重置点击状态
    }
}

// 激活 opsL 选项
function aktiopsL(){
    opsL.innerHTML = defopsL; // 恢复 opsL 的内容
    opsL.style.opacity=".8"; // 设置 opsL 的透明度为0.8
    opsLclick = 1; // 设置 opsLclick 为 1，表示可以点击
    opsLcheck += 1; // 增加 opsLcheck 计数
}

// 更改 opsL 选项内容
function gantiopsL(){
    opsL.innerHTML = "[ Klik beberapa LOVE-nya ]"; // 改变 opsL 内容为提示用户点击按钮
    opsL.style.opacity = ".8"; // 设置 opsL 的透明度为0.8
}

// 自动化过程
function otomatis(){
    pesan3.style="transition:none"; // 禁用过渡动画
    pesan8.style="display:none"; // 隐藏消息 8
    kalimat.style="opacity:0"; // 隐藏当前的文本
    if(otoaktipesan == 0){setTimeout(otolanj, 400)} // 如果 otoaktipesan 为 0，延时执行 otolanj
}

// 继续显示文本
function otolanj(){
    kalimat.style="opacity:1"; // 显示文本
}

// 处理第 1 条消息
function aktipesan1(){
    kalimat.innerHTML = pesan1.innerHTML; // 设置文本为消息 1 的内容
    kolombaru.style="position:relative;opacity:1;transform:scale(1);"; // 显示新的文本框
}
// 处理第 2 条消息
vketik2 = pesan2.innerHTML; // 获取第 2 条消息的文本内容
function aktipesan2(){
    wallpaper.style = "transform: scale(1.5);"; // 放大背景
    kolombaru.style = ""; // 清空文本框样式
    kalimat.innerHTML = ""; // 清空当前显示的文本内容

    // 使用 TypeIt 插件输入文本
    new TypeIt("#kalimat", {
        strings: ["" + vketik2], // 输入的字符串为消息 2 的内容
        startDelay: 20, // 延迟 20ms 后开始
        speed: 40, // 输入速度
        cursor: true, // 显示光标
        deleteSpeed: 50, // 删除速度
        breakLines: false, // 不自动换行
        waitUntilVisible: true, // 等待元素可见后才输入
        lifelike: true, // 模拟自然输入
        afterComplete: function(){
            setTimeout(aktipesan3, 500); // 延时 500ms 后显示第 3 条消息
        },
    }).go();
}

// 处理第 3 条消息
vketik3 = pesan3.innerHTML; // 获取第 3 条消息的文本内容
pesan3.innerHTML = ""; // 清空消息内容
function aktipesan3(){
    kalimat.style = "display:none"; // 隐藏当前文本
    pesan3.style = "position:relative;opacity:1;transform: scale(1)"; // 显示消息 3
    wallpaper.style = "transform: scale(1)"; // 恢复背景缩放
    fthilang(); // 隐藏贴图
    ftganti = 2; // 修改 ftganti 以显示不同的贴图
    setTimeout(ftmuncul, 300); // 延时 300ms 后调用 ftmuncul 函数显示贴图

    // 使用 TypeIt 插件显示消息 3
    new TypeIt("#pesan3", {
        strings: ["" + vketik3], // 输入的字符串为消息 3 的内容
        startDelay: 1, // 延迟 1ms 后开始
        speed: 45, // 输入速度
        cursor: true, // 显示光标
        waitUntilVisible: true, // 等待元素可见后输入
        lifelike: true, // 模拟自然输入
        afterComplete: function(){
            pesan3.innerHTML = vketik3; // 输入完成后设置文本
            setTimeout(otomatis, 600); // 延时 600ms 后调用自动化函数
            setTimeout(aktipesan4, 1010); // 延时 1010ms 后调用 aktipesan4 函数
        },
    }).go();
}

// 处理第 4 条消息
function aktipesan4(){
    wallpaper.style = "transform: scale(1.5);"; // 放大背景
    kalimat.innerHTML = pesan4.innerHTML + nama + " 🥳"; // 显示消息 4 和用户名字
    kalimat.style = "transform:scale(1.2)"; // 缩放文本
    setTimeout(aktipesan5, 1000); // 延时 1000ms 后调用 aktipesan5 函数
}

// 处理第 5 条消息
vketik5 = pesan5.innerHTML; // 获取第 5 条消息的文本内容
pesan5.innerHTML = ""; // 清空消息内容
function aktipesan5(){
    fthilang(); // 隐藏贴图
    ftganti = 3; // 修改 ftganti 以显示不同的贴图
    setTimeout(ftmuncul, 300); // 延时 300ms 后调用 ftmuncul 函数显示贴图
    wallpaper.style = "transform: scale(1);"; // 恢复背景缩放

    // 使用 TypeIt 插件显示消息 5
    new TypeIt("#pesan5", {
        strings: ["" + vketik5], // 输入的字符串为消息 5 的内容
        startDelay: 1, // 延迟 1ms 后开始
        speed: 52, // 输入速度
        cursor: true, // 显示光标
        waitUntilVisible: true, // 等待元素可见后输入
        lifelike: true, // 模拟自然输入
        afterComplete: function(){
            pesan5.innerHTML = vketik5 + " ><"; // 输入完成后设置文本
            setTimeout(aktipesan6, 800); // 延时 800ms 后调用 aktipesan6 函数
        },
    }).go();
}

// 处理第 6 条消息
vketik6 = pesan6.innerHTML; // 获取第 6 条消息的文本内容
pesan6.innerHTML = ""; // 清空消息内容
function aktipesan6(){
    wallpaper.style = "transform: scale(1.5);"; // 放大背景

    // 使用 TypeIt 插件显示消息 6
    new TypeIt("#pesan6", {
        strings: ["" + vketik6], // 输入的字符串为消息 6 的内容
        startDelay: 1, // 延迟 1ms 后开始
        speed: 52, // 输入速度
        cursor: true, // 显示光标
        waitUntilVisible: true, // 等待元素可见后输入
        lifelike: true, // 模拟自然输入
        afterComplete: function(){
            pesan6.innerHTML = vketik6; // 输入完成后设置文本
            setTimeout(aktipesan7, 800); // 延时 800ms 后调用 aktipesan7 函数
        },
    }).go();
}

// 处理第 7 条消息
vketik7 = pesan7.innerHTML; // 获取第 7 条消息的文本内容
pesan7.innerHTML = ""; // 清空消息内容
function aktipesan7(){
    fthilang(); // 隐藏贴图
    ftganti = 1; // 修改 ftganti 以显示不同的贴图
    setTimeout(ftmuncul, 300); // 延时 300ms 后调用 ftmuncul 函数显示贴图
    wallpaper.style = "transform: scale(1);"; // 恢复背景缩放

    // 使用 TypeIt 插件显示消息 7
    new TypeIt("#pesan7", {
        strings: ["" + vketik7], // 输入的字符串为消息 7 的内容
        startDelay: 1, // 延迟 1ms 后开始
        speed: 52, // 输入速度
        cursor: true, // 显示光标
        waitUntilVisible: true, // 等待元素可见后输入
        lifelike: true, // 模拟自然输入
        afterComplete: function(){
            pesan7.innerHTML = vketik7; // 输入完成后设置文本
            fungsi = 1; // 修改 fungsi 为 1
            setTimeout(tombol, 400); // 延时 400ms 后显示按钮
        },
    }).go();
}

// 处理第 8 条消息（分隔符）
vketik81 = pesan8.innerHTML; // 获取第 8 条消息的文本内容
pesan8.innerHTML = ""; // 清空消息内容
vketik9 = pesan9.innerHTML; // 获取第 9 条消息的文本内容
pesan9.innerHTML = ""; // 清空消息内容
vketik10 = pesan10.innerHTML; // 获取第 10 条消息的文本内容
pesan10.innerHTML = ""; // 清空消息内容
vketik11 = pesan11.innerHTML; // 获取第 10 条消息的文本内容
pesan11.innerHTML = ""; // 清空消息内容


function aktipesan8(){
    pesan5.style = "display:none"; // 隐藏消息 5
    pesan6.style = "display:none"; // 隐藏消息 6
    pesan7.style = "display:none"; // 隐藏消息 7
    pesan8.style = ""; // 显示消息 8
    wallpaper.style = "transform: scale(1);"; // 恢复背景缩放
    ftganti = 4; // 修改 ftganti 以显示不同的贴图
    ftmuncul(); // 显示贴图

    // 使用 TypeIt 插件显示消息 8 和 9
    new TypeIt("#pesan8", {
        strings: ["" + vketik8, "" + vketik9, "" + vketik10], // 输入的字符串为消息 8 和 9 的内容
        startDelay: 20, // 延迟 20ms 后开始
        speed: 45, // 输入速度
        cursor: true, // 显示光标
        deleteSpeed: 30, // 删除速度
        breakLines: false, // 不自动换行
        waitUntilVisible: true, // 等待元素可见后输入
        lifelike: true, // 模拟自然输入
        afterComplete: function(){
            pesan8.innerHTML = vketik9; // 输入完成后设置消息 8
            pesan8.innerHTML = vketik10; // 输入完成后设置消息 8
            setTimeout(otomatis, 1300); // 延时 1300ms 后调用自动化函数
            setTimeout(aktipesan11, 1710); // 延时 1710ms 后调用 aktipesan11 函数
            setTimeout(startCakeAnimation, 2000); // 延时 1710ms 后调用 aktipesan11 函数
        },
    }).go();
}

// 处理第 10 条消息
function aktipesan11(){
    wallpaper.style = "transform: scale(1.5);"; // 放大背景
    fthilang(); // 隐藏贴图
    ftganti = 5; // 修改 ftganti 以显示不同的贴图
    setTimeout(ftmuncul, 300); // 延时 300ms 后调用 ftmuncul 函数显示贴图
    otoaktipesan = 1; // 设置自动化消息标志为 1
    otomatis(); // 调用自动化函数
    setTimeout(toaktipesan, 300); // 延时 300ms 后调用 toaktipesan 函数

    // 设置每 400ms 执行一次 berjatuhan 函数
    setInterval(berjatuhan, 400);
    fungsi = 2; // 修改 fungsi 为 2
    setTimeout(tombol, 11000); // 延时 2000ms 后显示按钮
}
// 定义启动动画的函数
function startCakeAnimation() {
  // 显示蛋糕并启动动画
  const cake = document.getElementById('cake');
  cake.style.display = 'block';  // 显示蛋糕
  cake.style.opacity = '1';  // 蛋糕渐显
  cake.style.visibility = 'visible';  // 确保蛋糕可见

  // 启动蛋糕的各个部分动画
  document.getElementById('bizcocho_3').beginElement();
  document.getElementById('relleno_2').beginElement();
  document.getElementById('bizcocho_2').beginElement();
  document.getElementById('relleno_1').beginElement();
  document.getElementById('bizcocho_1').beginElement();
  document.getElementById('crema').beginElement();

  // 等待蛋糕动画完成后再启动蜡烛和火焰的动画
  setTimeout(function() {
    // 显示蜡烛并启动动画
    const candles = document.querySelectorAll('.velas');
    candles.forEach(candle => {
      candle.style.display = 'block';  // 确保蜡烛可见
      candle.style.opacity = '1';  // 通过透明度显示蜡烛
      candle.style.visibility = 'visible';  // 确保蜡烛可见
      candle.classList.add('appear');  // 启动蜡烛的出现动画
    });

    // 设置火焰的动画
    const flames = document.querySelectorAll('.fuego');
    flames.forEach((flame, index) => {
      flame.style.animation = `fuegoAnim ${1 + index * 0.2}s infinite`; // 控制火焰动画延迟
      flame.style.opacity = '1';  // 通过透明度显示火焰
      flame.style.visibility = 'visible';  // 确保火焰可见
    });
  }, 3000);  // 3秒后显示蜡烛和火焰
}

// 处理自动化消息的函数
var otoaktipesan = 0;
function toaktipesan(){
    kalimat.innerHTML = vketik11; // 设置文本为消息 10 的内容
    kalimat.style = "transform:scale(1);font-size:24px;font-family:var(--gaya-font2)"; // 设置文本样式
}
// 处理按钮点击事件，显示回答选项
document.getElementById("lv1").onclick = function() {
    lv1.style = "opacity:0"; // 隐藏 LV1 按钮
    slov += 1; // 增加 slov 计数器
    this.onclick = null; // 禁用当前点击事件
    checkslov(); // 调用 checkslov 函数检查是否需要自动化下一步
}

// 处理 LV2 按钮点击事件
document.getElementById("lv2").onclick = function() {
    lv2.style = "opacity:0"; // 隐藏 LV2 按钮
    slov += 1; // 增加 slov 计数器
    this.onclick = null; // 禁用当前点击事件
    checkslov(); // 调用 checkslov 函数检查是否需要自动化下一步
}

// 处理 LV3 按钮点击事件
document.getElementById("lv3").onclick = function() {
    lv3.style = "opacity:0"; // 隐藏 LV3 按钮
    slov += 1; // 增加 slov 计数器
    this.onclick = null; // 禁用当前点击事件
    checkslov(); // 调用 checkslov 函数检查是否需要自动化下一步
}

// 处理 LV4 按钮点击事件
document.getElementById("lv4").onclick = function() {
    lv4.style = "opacity:0"; // 隐藏 LV4 按钮
    slov += 1; // 增加 slov 计数器
    this.onclick = null; // 禁用当前点击事件
    checkslov(); // 调用 checkslov 函数检查是否需要自动化下一步
}

var slov = 0; // 初始化 slov 计数器

// 检查是否可以自动开始下一步
function checkslov() {
    if (slov == 4) { // 如果点击了所有按钮，进入下一步
        kolombaru.style = "position:relative;transform:scale(1)"; // 恢复文本框的样式
        otomatis(); // 调用自动化函数
        setTimeout(aktipesan2, 400); // 延时 400ms 后开始显示第 2 条消息
    }
}

// 处理用户点击时，询问的问题弹窗
async function pertanyaan() {
    var { isConfirmed: prtanya } = await swals.fire({
        title: nama + '<br>' + tanya, // 用户名称和提问分为两行
        text: '' + opstanya, // 问题内容
        imageUrl: '' + fotostiker6.src, // 问题相关图片
        showCancelButton: true, // 显示取消按钮
        confirmButtonText: '' + tompositif, // 确认按钮文字
        cancelButtonText: '' + tomnegatif, // 取消按钮文字
    });

    if (prtanya) { // 用户点击确认按钮
        await swalst.fire({
            title: '' + katatambahan.innerHTML, // 显示额外的文字
            timer: 2000, // 显示时间为 2 秒
            imageUrl: '' + stikerditolak.src, // 相关图片
        });
        vketik8 = vketik81; // 恢复 vketik8 内容
        aktipesan8(); // 调用 aktipesan8 函数继续执行
    } else { // 用户点击取消按钮
        await swalst.fire({
            title: '' + kataditolak.innerHTML, // 显示拒绝的文字
            timer: 2000, // 显示时间为 2 秒
            imageUrl: '' + stikerditolak.src, // 相关图片
        });
        vketik8 = ""; // 清空 vketik8 内容
        aktipesan8(); // 调用 aktipesan8 函数继续执行
    }
}

// 动画函数：模拟物品掉落
function berjatuhan() {
    // 这个函数用于控制物体在页面上的掉落效果
    // 可根据实际需求增加或修改掉落的对象和效果
}

// 自动化过程：输入某些固定的内容或触发特定动画
function otomatis() {
    pesan3.style = "transition:none"; // 关闭过渡动画
    pesan8.style = "display:none"; // 隐藏消息 8
    kalimat.style = "opacity:0"; // 隐藏当前文本
    if (otoaktipesan == 0) {
        setTimeout(otolanj, 400); // 延时 400ms 后继续执行
    }
}

function otolanj() {
    kalimat.style = "opacity:1"; // 恢复显示当前文本
}

// 触发类型输入函数：显示消息 1 的内容
function aktipesan1() {
    kalimat.innerHTML = pesan1.innerHTML; // 显示第 1 条消息
    kolombaru.style = "position:relative;opacity:1;transform:scale(1);"; // 恢复文本框样式
}

// 为后续输入准备相关文本内容
vketik2 = pesan2.innerHTML;
