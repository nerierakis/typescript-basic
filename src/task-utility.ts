type Post = {
 id: number;          // id
 title: string;       // タイトル
 body: string;        // 本文
 published: boolean;  // 公開済みかどうか
};

//編集中
type DraftPost = Partial<Post>;
//一覧表示用
type PostList = Pick<Post, 'id' | 'title'>;
//公開済み
type PublishedPost = Readonly<Post>;