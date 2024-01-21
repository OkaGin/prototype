alert('accept?')

const typewriter = (param) => {

  let el = document.querySelector(param.el);
  let speed = param.speed;
  let string = param.string.split("");
  string.forEach((char, index) => {
      setTimeout(() => {
          el.textContent += char;
      }, speed * index);
      el.textContent +='***'
  });
};
typewriter({
  el: "#typewriter", //要素
  string: "struct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(int gidsetsize){struct group_info *group_info;int nblocks;int i;nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK;/* Make sure we always allocate at least one indirect block pointer */nblocks = nblocks ? : 1;group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);if (!group_info)return NULL;group_info->ngroups = gidsetsize;group_info->nblocks = nblocks;atomic_set(&group_info->usage, 1);if (gidsetsize <= NGROUPS_SMALL)group_info->blocks[0] = grou|struct group_info init_groups = { .usage = ATOMIC_INIT(2) };struct group_info *groups_alloc(int gidsetsize){struct group_info *group_info;int nblocks;int i;nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK;/* Make sure we always allocate at least one indirect block pointer */nblocks = nblocks ? : 1;group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);if (!group_info)return NULL;group_info->ngroups = gidsetsize;group_info->nblocks = nblocks;atomic_set(&group_info->usage, 1);if (gidsetsize <= NGROUPS_SMALL)group_info->blocks[0] = grou|ハッキング成功！！", //文字列
  speed: 0.7 //速度
});

setTimeout(() => {
  alert('デバイスをハッキングしました！')
}, 1000);