

export class CreateBlogDto {

    private constructor(
        public readonly title: string,
        public readonly content: string,
        public readonly desc_short: string,
        public readonly slug: string,
        public readonly img: string,
        public readonly skills: string[],
    ) {}

    static create( props: {[key:string]: any}): [string | undefined, CreateBlogDto | undefined] {
        
        const { title, content, desc_short, slug, img, skills = [] } = props;
        if( !title ) return ['Title property is required', undefined];
        if( !content ) return ['Content property is required', undefined];
        if( !desc_short ) return ['Desc_short property is required', undefined];
        if( !slug ) return ['slug property is required', undefined];
        if( !img ) return ['img property is required', undefined];

        return [undefined, new CreateBlogDto(title, content, desc_short, slug, img, skills)];
    }


}