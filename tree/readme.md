验证搜索二叉树：
 # 什么是搜索二叉树？ 
    在二叉树中，左边的左子树大于根节点，右边的子树大于根节点，对于每个子树都是一样的。
   根据这个特性，我们可以想出两种解决方法。

   1. 用中序遍历，因为中序遍历会将子节点按照，左中右的顺序进行遍历，所以对于中序遍历来说。我们以这个顺序一定是升序的一个操作，那么对于我们来讲我们可以根据中序后的结果，然后对其进行排序，那么我们可以得到如果两者相同则这是个二叉搜索树。

   2. 用递归，递归有一个很重要的特性，可以根据小树的情况遍历整个树，以达到一种保证左子树一定小于root,右子树一定大于root的情况。所以可以求出是否是二叉搜索树。

   