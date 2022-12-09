import{_ as s,c as n,o as a,a as l}from"./app.883e59f3.js";const p="/docs-surprise/assets/proto.ed3075ad.png",d=JSON.parse('{"title":"JavaScript Proto","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u539F\u578B","slug":"\u539F\u578B","link":"#\u539F\u578B","children":[]},{"level":2,"title":"\u539F\u578B\u94FE\u67E5\u627E","slug":"\u539F\u578B\u94FE\u67E5\u627E","link":"#\u539F\u578B\u94FE\u67E5\u627E","children":[]},{"level":2,"title":"prototype\u5C5E\u6027","slug":"prototype\u5C5E\u6027","link":"#prototype\u5C5E\u6027","children":[]},{"level":2,"title":"\u521B\u5EFA\u5BF9\u8C61\u7684\u539F\u578B","slug":"\u521B\u5EFA\u5BF9\u8C61\u7684\u539F\u578B","link":"#\u521B\u5EFA\u5BF9\u8C61\u7684\u539F\u578B","children":[]},{"level":2,"title":"constructor \u5C5E\u6027","slug":"constructor-\u5C5E\u6027","link":"#constructor-\u5C5E\u6027","children":[]},{"level":2,"title":"this \u6307\u5411","slug":"this-\u6307\u5411","link":"#this-\u6307\u5411","children":[]}],"relativePath":"javascript/js-proto.md","lastUpdated":1670596498000}'),o={name:"javascript/js-proto.md"},e=l('<h1 id="javascript-proto" tabindex="-1">JavaScript Proto <a class="header-anchor" href="#javascript-proto" aria-hidden="true">#</a></h1><div><p><code>JavaScript \u539F\u578B\u7684\u610F\u4E49\u5728\u4E8E\u5B9E\u73B0\u7EE7\u627F\u529F\u80FD\uFF0C\u4E3A\u4E86\u641E\u61C2\u5185\u90E8\u5B9E\u73B0\u53EF\u53C2\u8003\u4E0B\u56FE\u7684\u76F8\u4E92\u5F15\u7528</code></p></div><p><img src="'+p+`" alt="proto.png"></p><h2 id="\u539F\u578B" tabindex="-1">\u539F\u578B <a class="header-anchor" href="#\u539F\u578B" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">\u7B80\u4ECB</p><p>JavaScript \u88AB\u63CF\u8FF0\u4E3A\u4E00\u79CD<strong>\u57FA\u4E8E\u539F\u578B\u7684\u8BED\u8A00</strong>\uFF0C\u6BCF\u4E2A\u5BF9\u8C61\u62E5\u6709\u4E00\u4E2A<strong>\u539F\u578B\u5BF9\u8C61</strong>\uFF0C\u5BF9\u8C61\u4ECE\u539F\u578B\u7EE7\u627F\u65B9\u6CD5\u548C\u5C5E\u6027\u3002</p><p>\u539F\u578B\u5BF9\u8C61\u4E5F\u53EF\u80FD\u62E5\u6709\u539F\u578B\uFF0C\u5E76\u4ECE\u4E2D\u7EE7\u627F\u65B9\u6CD5\u548C\u5C5E\u6027\uFF0C\u4E00\u5C42\u4E00\u5C42\u3001\u4EE5\u6B64\u7C7B\u63A8\uFF0C\u8FD9\u79CD\u5173\u7CFB\u5E38\u88AB\u79F0\u4E3A<strong>\u539F\u578B\u94FE</strong>\u3002</p><p>\u5728 JavaScript \u7684<strong>\u5BF9\u8C61\u5B9E\u4F8B</strong>\u548C<strong>\u5B83\u7684\u6784\u9020\u5668</strong>\u4E4B\u95F4\u5EFA\u7ACB\u4E00\u4E2A\u94FE\u63A5\uFF0C\u5B83\u5C31\u662F__proto__\u5C5E\u6027\uFF0C\u662F\u4ECE<strong>\u6784\u9020\u51FD\u6570</strong>\u7684<strong>prototype</strong>\u5C5E\u6027\u6D3E\u751F\u7684\u3002</p><p>\u83B7\u53D6\u539F\u578B\uFF0C\u53EF\u4EE5\u901A\u8FC7 <strong>Object.getPrototypeOf(obj)</strong> \u6216\u8005\u5DF2\u88AB\u5F03\u7528\u7684__proto__\u5C5E\u6027\u83B7\u5F97\u3002</p></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#66D9EF;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">doSomething</span><span style="color:#F8F8F2;">(){}</span></span>
<span class="line"><span style="color:#66D9EF;">doSomething</span><span style="color:#F8F8F2;">.prototype.foo </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;bar&quot;</span><span style="color:#F8F8F2;">; </span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">var</span><span style="color:#F8F8F2;"> doSomeInstancing </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">doSomething</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#F8F8F2;">doSomeInstancing.prop </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;some value&quot;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">doSomeInstancing.</span><span style="color:#A6E22E;">valueOf</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// result</span></span>
<span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">    prop: </span><span style="color:#E6DB74;">&quot;some value&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    __proto__: {</span></span>
<span class="line"><span style="color:#F8F8F2;">        foo: </span><span style="color:#E6DB74;">&quot;bar&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        constructor: \u0192 </span><span style="color:#A6E22E;">doSomething</span><span style="color:#F8F8F2;">(),</span></span>
<span class="line"><span style="color:#F8F8F2;">        __proto__: {</span></span>
<span class="line"><span style="color:#F8F8F2;">            constructor: \u0192 </span><span style="color:#A6E22E;">Object</span><span style="color:#F8F8F2;">(),</span></span>
<span class="line"><span style="color:#F8F8F2;">            hasOwnProperty: \u0192 </span><span style="color:#A6E22E;">hasOwnProperty</span><span style="color:#F8F8F2;">(),</span></span>
<span class="line"><span style="color:#F8F8F2;">            isPrototypeOf: \u0192 </span><span style="color:#A6E22E;">isPrototypeOf</span><span style="color:#F8F8F2;">(),</span></span>
<span class="line"><span style="color:#F8F8F2;">            propertyIsEnumerable: \u0192 </span><span style="color:#A6E22E;">propertyIsEnumerable</span><span style="color:#F8F8F2;">(),</span></span>
<span class="line"><span style="color:#F8F8F2;">            toLocaleString: \u0192 </span><span style="color:#A6E22E;">toLocaleString</span><span style="color:#F8F8F2;">(),</span></span>
<span class="line"><span style="color:#F8F8F2;">            toString: \u0192 </span><span style="color:#A6E22E;">toString</span><span style="color:#F8F8F2;">(),</span></span>
<span class="line"><span style="color:#F8F8F2;">            valueOf: \u0192 </span><span style="color:#A6E22E;">valueOf</span><span style="color:#F8F8F2;">(),</span></span>
<span class="line"><span style="color:#F8F8F2;">            __proto__: </span><span style="color:#AE81FF;">null</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="\u539F\u578B\u94FE\u67E5\u627E" tabindex="-1">\u539F\u578B\u94FE\u67E5\u627E <a class="header-anchor" href="#\u539F\u578B\u94FE\u67E5\u627E" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">\u7B80\u4ECB</p><p>\u9996\u5148\uFF0C\u4F1A\u68C0\u67E5 <strong>doSomeInstancing</strong> \u5BF9\u8C61\u662F\u5426\u5177\u6709\u53EF\u7528\u7684 <strong>valueOf()</strong> \u65B9\u6CD5\uFF0C<br> \u5982\u679C\u6CA1\u6709\uFF0C\u5219\u6D4F\u89C8\u5668\u68C0\u67E5 <strong>doSomeInstancing</strong> \u5BF9\u8C61\u7684\u539F\u578B\u5BF9\u8C61\uFF08\u5373 <strong>doSomething</strong> \u6784\u9020\u51FD\u6570\u7684 prototype \u5C5E\u6027\u6240\u6307\u5411\u7684\u5BF9\u8C61\uFF09\u662F\u5426\u5177\u6709\u53EF\u7528\u7684 <strong>valueof()</strong> \u65B9\u6CD5\u3002<br> \u5982\u679C\u4E5F\u6CA1\u6709\uFF0C\u5219\u6D4F\u89C8\u5668\u68C0\u67E5 <strong>doSomething()</strong> \u6784\u9020\u51FD\u6570\u7684 prototype \u5C5E\u6027\u6240\u6307\u5411\u7684\u5BF9\u8C61\u7684\u539F\u578B\u5BF9\u8C61\uFF08\u5373 <strong>Object</strong> \u6784\u9020\u51FD\u6570\u7684 prototype \u5C5E\u6027\u6240\u6307\u5411\u7684\u5BF9\u8C61\uFF09\u662F\u5426\u5177\u6709\u53EF\u7528\u7684 <strong>valueOf()</strong> \u65B9\u6CD5\u3002\u8FD9\u91CC\u6709\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u4E8E\u662F\u8BE5\u65B9\u6CD5\u88AB\u8C03\u7528\u3002</p></div><h2 id="prototype\u5C5E\u6027" tabindex="-1">prototype\u5C5E\u6027 <a class="header-anchor" href="#prototype\u5C5E\u6027" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">\u7B80\u4ECB</p><p><strong>prototype</strong> \u5BF9\u8C61\u5B9A\u4E49\u7EE7\u627F\u6210\u5458\u7684\u5730\u65B9\uFF0C\u901A\u8FC7\u4FEE\u6539\u539F\u578B\u5C5E\u6027<br> \u6BD4\u5982 <strong>Object.values()</strong>\u3001<strong>Object.keys()</strong>\uFF0C\u4EE5\u53CA\u5176\u4ED6\u4E0D\u5728 <strong>prototype</strong> \u5BF9\u8C61\u5185\u7684\u6210\u5458\uFF0C\u4E0D\u4F1A\u88AB\u201C<strong>\u5BF9\u8C61\u5B9E\u4F8B</strong>\u201D\u6216\u201C<strong>\u7EE7\u627F\u81EA Object() \u7684\u5BF9\u8C61\u7C7B\u578B</strong>\u201D\u6240\u7EE7\u627F\u3002\u8FD9\u4E9B\u65B9\u6CD5/\u5C5E\u6027\u4EC5\u80FD\u88AB<strong>Object() \u6784\u9020\u5668</strong>\u81EA\u8EAB\u4F7F\u7528\u3002<br><strong>prototype</strong> \u5B9A\u4E49\u7EE7\u627F\u6210\u5458\uFF0C__proto__\u8BBF\u95EE\u7EE7\u627F\u5BF9\u8C61</p></div><h2 id="\u521B\u5EFA\u5BF9\u8C61\u7684\u539F\u578B" tabindex="-1">\u521B\u5EFA\u5BF9\u8C61\u7684\u539F\u578B <a class="header-anchor" href="#\u521B\u5EFA\u5BF9\u8C61\u7684\u539F\u578B" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">\u7B80\u4ECB</p><p>\u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF0C\u4F7F\u7528\u73B0\u6709\u7684\u5BF9\u8C61\u6765\u4F5C\u4E3A\u65B0\u521B\u5EFA\u5BF9\u8C61\u7684\u539F\u578B\uFF08<strong>prototype</strong>\uFF09</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#66D9EF;">let</span><span style="color:#F8F8F2;"> a </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> { name: </span><span style="color:#E6DB74;">&#39;join&#39;</span><span style="color:#F8F8F2;"> }</span></span>
<span class="line"><span style="color:#66D9EF;">let</span><span style="color:#F8F8F2;"> b </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Object.</span><span style="color:#A6E22E;">create</span><span style="color:#F8F8F2;">(a)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// result { name: &#39;join&#39; }</span></span>
<span class="line"><span style="color:#F8F8F2;">b.__proto__</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><h2 id="constructor-\u5C5E\u6027" tabindex="-1">constructor \u5C5E\u6027 <a class="header-anchor" href="#constructor-\u5C5E\u6027" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">\u7B80\u4ECB</p><p>\u6BCF\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u90FD\u4ECE\u539F\u578B\u4E2D\u7EE7\u627F\u4E86\u4E00\u4E2A constructor \u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u6307\u5411\u4E86\u7528\u4E8E\u6784\u9020\u6B64\u5B9E\u4F8B\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u3002</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#66D9EF;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Person</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">val</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.name </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> val</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">fun1</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">function</span><span style="color:#F8F8F2;"> () {</span></span>
<span class="line"><span style="color:#F8F8F2;">        console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;hello&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#66D9EF;">let</span><span style="color:#F8F8F2;"> person </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Person</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;name&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">person.</span><span style="color:#A6E22E;">fun1</span><span style="color:#F8F8F2;">() </span><span style="color:#88846F;">// hello</span></span>
<span class="line"><span style="color:#66D9EF;">let</span><span style="color:#F8F8F2;"> person1 </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> person.</span><span style="color:#A6E22E;">constructor</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;name1&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(person) </span><span style="color:#88846F;">// {name: &#39;name&#39;, fun1: \u0192}</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(person1) </span><span style="color:#88846F;">// {name: &#39;name1&#39;, fun1: \u0192}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">/* result Person \u6784\u9020\u5668</span></span>
<span class="line"><span style="color:#88846F;">function Person(val) {</span></span>
<span class="line"><span style="color:#88846F;">    this.name = val</span></span>
<span class="line"><span style="color:#88846F;">    this.fun1 = function () {</span></span>
<span class="line"><span style="color:#88846F;">        console.log(&#39;hello&#39;)</span></span>
<span class="line"><span style="color:#88846F;">    }</span></span>
<span class="line"><span style="color:#88846F;">}</span></span>
<span class="line"><span style="color:#88846F;">*/</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u53EF\u4EE5\u901A\u8FC7\u5B9E\u4F8B\u7684\u6784\u9020\u51FD\u6570\uFF0C\u5728\u65E0\u6CD5\u83B7\u53D6\u539F\u59CB\u6784\u9020\u5668\u65F6\u4F7F\u7528\u521B\u5EFA\u65B0\u7684\u5B9E\u4F8B\u5BF9\u8C61</p></div><h2 id="this-\u6307\u5411" tabindex="-1">this \u6307\u5411 <a class="header-anchor" href="#this-\u6307\u5411" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">this\u6307\u5411</p><ol><li>\u666E\u901A\u51FD\u6570 <ol><li><code>this\u6307\u5411</code> \u8C03\u7528\u51FD\u6570\u7684\u76F4\u63A5\u5BF9\u8C61</li><li>\u6CA1\u6709\u76F4\u63A5\u8C03\u7528\u8005\uFF0C<code>this\u6307\u5411</code> window</li><li>&quot;use strict&quot;\uFF0C\u6307\u5B9A\u4E86\u4E25\u683C\u6A21\u5F0F\uFF0C<code>this\u6307\u5411</code> undefined</li><li>\u53EF\u4EE5\u88ABcall,apply,bind\u6539\u53D8 <code>this\u6307\u5411</code></li></ol></li></ol><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#66D9EF;">let</span><span style="color:#F8F8F2;"> obj </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    name: </span><span style="color:#E6DB74;">&quot;obj&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">func</span><span style="color:#F8F8F2;">() { console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">) },</span></span>
<span class="line"><span style="color:#F8F8F2;">    item: {</span></span>
<span class="line"><span style="color:#F8F8F2;">        name: </span><span style="color:#E6DB74;">&quot;item&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#A6E22E;">func</span><span style="color:#F8F8F2;">() { console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">) },</span></span>
<span class="line"><span style="color:#F8F8F2;">    },</span></span>
<span class="line"><span style="color:#F8F8F2;">};</span></span>
<span class="line"><span style="color:#F8F8F2;">obj.</span><span style="color:#A6E22E;">func</span><span style="color:#F8F8F2;">();         </span><span style="color:#88846F;">// { name: &#39;obj&#39;, func: function, item: {...} }</span></span>
<span class="line"><span style="color:#F8F8F2;">obj.item.</span><span style="color:#A6E22E;">func</span><span style="color:#F8F8F2;">();    </span><span style="color:#88846F;">// { name: &#39;item&#39;, func: function }</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="2"><li>\u7BAD\u5934\u51FD\u6570 <ol><li><code>this\u6307\u5411</code> \u7BAD\u5934\u51FD\u6570\u6240\u5728\u4F5C\u7528\u57DF\u4E2D\u7684this\uFF0C\u7BAD\u5934\u51FD\u6570\u6240\u5904\u4E0A\u4E0B\u6587\u7684this</li><li>\u4E0A\u4E0B\u6587\u5C31\u662F\u6BCF\u6BB5\u4EE3\u7801\u7684\u6267\u884C\u73AF\u5883</li></ol></li></ol><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#66D9EF;">let</span><span style="color:#F8F8F2;"> obj </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    name: </span><span style="color:#E6DB74;">&quot;obj&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">func</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#88846F;">// { name: &#39;obj&#39;, func: function, item: {...} }</span></span>
<span class="line"><span style="color:#F8F8F2;">        console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#A6E22E;">setTimeout</span><span style="color:#F8F8F2;">(() </span><span style="color:#66D9EF;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">            </span><span style="color:#88846F;">// { name: &#39;obj&#39;, func: function, item: {...} }</span></span>
<span class="line"><span style="color:#F8F8F2;">            console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">        });</span></span>
<span class="line"><span style="color:#F8F8F2;">    },</span></span>
<span class="line"><span style="color:#F8F8F2;">};</span></span>
<span class="line"><span style="color:#F8F8F2;">obj.</span><span style="color:#A6E22E;">func</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></div><div class="info custom-block"><p class="custom-block-title">\u6539\u53D8this\u6307\u5411\u7684\u65B9\u6CD5</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#66D9EF;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">child</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.name </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;child&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">    console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">arguments</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#66D9EF;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">person</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.name </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;person&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">    console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">arguments</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">    console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">)   </span><span style="color:#88846F;">// window</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#88846F;">// call() \u5728 \u51FD\u6570 \u8FD0\u884C\u65F6\u6307\u5B9A\u4F7F\u7528\u7684 this \u503C\uFF0C\u8FD9\u91CC\u6307\u5411 person \u6784\u9020\u51FD\u6570\u7684</span></span>
<span class="line"><span style="color:#88846F;">// this =&gt; person\uFF0C\u7ACB\u5373\u8FD0\u884C</span></span>
<span class="line"><span style="color:#F8F8F2;">child.</span><span style="color:#A6E22E;">call</span><span style="color:#F8F8F2;">(person,</span><span style="color:#E6DB74;">&#39;arg1&#39;</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&#39;arg2&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// apply() \u5728 \u51FD\u6570 \u8FD0\u884C\u65F6\u6307\u5B9A\u4F7F\u7528\u7684 this \u503C\uFF0C\u8FD9\u91CC\u6307\u5411 person \u6784\u9020\u51FD\u6570\u7684</span></span>
<span class="line"><span style="color:#88846F;">// this =&gt; person\uFF0C\u7ACB\u5373\u8FD0\u884C</span></span>
<span class="line"><span style="color:#F8F8F2;">child.</span><span style="color:#A6E22E;">apply</span><span style="color:#F8F8F2;">(person,[</span><span style="color:#E6DB74;">&#39;arg1&#39;</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&#39;arg2&#39;</span><span style="color:#F8F8F2;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// bind() \u5728 bind() \u88AB\u8C03\u7528\u65F6\uFF0C\u8FD9\u4E2A\u65B0\u51FD\u6570\u7684 this \u6307\u5411\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u8FD9\u91CC\u6307\u5411 person \u6784\u9020\u51FD\u6570\u7684</span></span>
<span class="line"><span style="color:#88846F;">// this =&gt; person\uFF0C\u8FD4\u56DE\u65B0\u51FD\u6570\uFF0C\u624B\u52A8\u8C03\u7528\u65B0\u51FD\u6570</span></span>
<span class="line"><span style="color:#F8F8F2;">child.</span><span style="color:#A6E22E;">bind</span><span style="color:#F8F8F2;">(person,[</span><span style="color:#E6DB74;">&#39;arg1&#39;</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&#39;arg2&#39;</span><span style="color:#F8F8F2;">])()</span></span>
<span class="line"><span style="color:#F8F8F2;">child.</span><span style="color:#A6E22E;">bind</span><span style="color:#F8F8F2;">(person,</span><span style="color:#E6DB74;">&#39;arg1&#39;</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&#39;arg2&#39;</span><span style="color:#F8F8F2;">)()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// \u533A\u522B1: \u53C2\u6570</span></span>
<span class="line"><span style="color:#A6E22E;">call</span><span style="color:#F8F8F2;">() \u4E00\u4E2A\u53C2\u6570\u5217\u8868             arg1, arg2 </span><span style="color:#F92672;">...</span></span>
<span class="line"><span style="color:#A6E22E;">apply</span><span style="color:#F8F8F2;">() \u4E00\u4E2A\u5305\u542B\u591A\u4E2A\u53C2\u6570\u7684\u6570\u7EC4   [arg1, arg2 </span><span style="color:#F92672;">...</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#A6E22E;">bind</span><span style="color:#F8F8F2;">() \u4E00\u4E2A\u53C2\u6570\u5217\u8868             arg1, arg2, </span><span style="color:#F92672;">...</span></span>
<span class="line"><span style="color:#88846F;">// \u533A\u522B2: \u8FD0\u884C\u65F6\u673A</span></span>
<span class="line"><span style="color:#A6E22E;">call</span><span style="color:#F8F8F2;">()</span><span style="color:#A6E22E;">\u548Capply</span><span style="color:#F8F8F2;">() \u662F\u7ACB\u5373\u6267\u884C</span></span>
<span class="line"><span style="color:#A6E22E;">bind</span><span style="color:#F8F8F2;">() \u662F\u5148\u6307\u5B9Athis\u6307\u5411\uFF0C\u8FD4\u56DE\u65B0\u51FD\u6570\u624B\u52A8\u8C03\u7528</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div></div>`,17),r=[e];function c(t,F,i,y,b,u){return a(),n("div",null,r)}const E=s(o,[["render",c]]);export{d as __pageData,E as default};
