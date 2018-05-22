// prerequisite: const.js should be included first

var BIBLE_ID						= BIBLE_CUV_GB2312;
var UNION_XML_FILENAME 				= "../xml/union.xml";
var TO_LAST_CHAPTER					= "<< 前一章";
var TO_NEXT_CHAPTER					= "后一章 >>";
var TO_LAST_PAGE					= "<< 上一页";
var TO_NEXT_PAGE					= "下一页 >>";
var ALERT_INPUT_CHINESE				= "请输入中文";
var SEARCH_RESULT_BAOHAN			= "包含";
var SEARCH_RESULT_DEJINGWEN			= "的经文：共";
var VERSE_IN_CHINESE				= "节";

var CHAPTER_NO = new Array (
		"零",
		"一",
		"二",
		"三",
		"四",
		"五",
		"六",
		"七",
		"八",
		"九",
		"十",
		"十一",
		"十二",
		"十三",
		"十四",
		"十五",
		"十六",
		"十七",
		"十八",
		"十九",
		"二十",
		"二十一",
		"二十二",
		"二十三",
		"二十四",
		"二十五",
		"二十六",
		"二十七",
		"二十八",
		"二十九",
		"三十",
		"三十一",
		"三十二",
		"三十三",
		"三十四",
		"三十五",
		"三十六",
		"三十七",
		"三十八",
		"三十九",
		"四十",
		"四十一",
		"四十二",
		"四十三",
		"四十四",
		"四十五",
		"四十六",
		"四十七",
		"四十八",
		"四十九",
		"五十",
		"五十一",
		"五十二",
		"五十三",
		"五十四",
		"五十五",
		"五十六",
		"五十七",
		"五十八",
		"五十九",
		"六十",
		"六十一",
		"六十二",
		"六十三",
		"六十四",
		"六十五",
		"六十六",
		"六十七",
		"六十八",
		"六十九",
		"七十",
		"七十一",
		"七十二",
		"七十三",
		"七十四",
		"七十五",
		"七十六",
		"七十七",
		"七十八",
		"七十九",
		"八十",
		"八十一",
		"八十二",
		"八十三",
		"八十四",
		"八十五",
		"八十六",
		"八十七",
		"八十八",
		"八十九",
		"九十",
		"九十一",
		"九十二",
		"九十三",
		"九十四",
		"九十五",
		"九十六",
		"九十七",
		"九十八",
		"九十九",
		"一百",
		"一百零一",
		"一百零二",
		"一百零三",
		"一百零四",
		"一百零五",
		"一百零六",
		"一百零七",
		"一百零八",
		"一百零九",
		"一百一十",
		"一百一十一",
		"一百一十二",
		"一百一十三",
		"一百一十四",
		"一百一十五",
		"一百一十六",
		"一百一十七",
		"一百一十八",
		"一百一十九",
		"一百二十",
		"一百二十一",
		"一百二十二",
		"一百二十三",
		"一百二十四",
		"一百二十五",
		"一百二十六",
		"一百二十七",
		"一百二十八",
		"一百二十九",
		"一百三十",
		"一百三十一",
		"一百三十二",
		"一百三十三",
		"一百三十四",
		"一百三十五",
		"一百三十六",
		"一百三十七",
		"一百三十八",
		"一百三十九",
		"一百四十",
		"一百四十一",
		"一百四十二",
		"一百四十三",
		"一百四十四",
		"一百四十五",
		"一百四十六",
		"一百四十七",
		"一百四十八",
		"一百四十九",
		"一百五十",
		"一百五十一",
		"一百五十二",
		"一百五十三",
		"一百五十四",
		"一百五十五",
		"一百五十六",
		"一百五十七",
		"一百五十八",
		"一百五十九",
		"一百六十",
		"一百六十一",
		"一百六十二",
		"一百六十三",
		"一百六十四",
		"一百六十五",
		"一百六十六",
		"一百六十七",
		"一百六十八",
		"一百六十九",
		"一百七十",
		"一百七十一",
		"一百七十二",
		"一百七十三",
		"一百七十四",
		"一百七十五",
		"一百七十六" // 诗篇一百一十九篇节数
);