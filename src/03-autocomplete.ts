function autocomplete(search: string, items: string[], maxResult: number): string[] {
  const keyword = search.toLowerCase();

  const startList: string[] = [];
  const middleList: string[] = [];
  const endList: string[] = [];

  for (const item of items) {
    const text = item.toLowerCase();

    if (!text.includes(keyword)) {
      continue;
    }

    if (text.startsWith(keyword)) {
      startList.push(item);
    } else if (text.endsWith(keyword)) {
      endList.push(item);
    } else {
      middleList.push(item);
    }
  }

  const result = [...startList, ...middleList, ...endList];
  return result.slice(0, maxResult);
}

console.log(autocomplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2));
