import {
  Novel,
  NovelsByGenre,
} from '../../home-page/image-slider/novels.types';

export class NovelsServices {
  allNovels: Novel[] = [
    {
      id: 'twisted-love',
      name: 'Twisted-Love',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/twistedLove.jpg',
      genre: 'Genre1',
      rating: 3.5,
    },
    {
      id: 'twisted-games',
      name: 'Twisted-Games',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/twistedGames.jpg',
      genre: 'Genre1',
      rating: 3.5,
    },
    {
      id: 'twisted-hate',
      name: 'Twisted-Hate',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/twistedHate.jpg',
      genre: 'Genre1',
      rating: 3.5,
    },
    {
      id: 'twisted-lies',
      name: 'Twisted-Lies',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/twistedLies.jpg',
      genre: 'Genre1',
      rating: 3.5,
    },
    {
      id: 'off-campus-the-deal',
      name: 'THE DEAL (OFF-CAMPUS BOOK 1)',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/offCampusTheDeal.jpg',
      genre: 'Genre2',
      rating: 3.5,
    },
    {
      id: 'off-campus-the-mistake',
      name: 'THE MISTAKE (OFF-CAMPUS BOOK 2)',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/offCampusTheMistake.jpg',
      genre: 'Genre2',
      rating: 3.5,
    },
    {
      id: 'off-campus-the-score',
      name: 'THE SCORE (OFF-CAMPUS BOOK 3)',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/offCampusTheScore.jpg',
      genre: 'Genre2',
      rating: 3.5,
    },
    {
      id: 'off-campus-the-goal',
      name: 'THE GOAL (OFF-CAMPUS BOOK 4)',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/offCampusTheGoal.jpg',
      genre: 'Genre2',
      rating: 3.5,
    },
    {
      id: 'off-campus-the-legacy',
      name: 'THE LEGACY (OFF-CAMPUS BOOK 5)',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/offCampusTheLegacy.jpg',
      genre: 'Genre2',
      rating: 3.5,
    },
    {
      id: 'in-27-days',
      name: 'In 27 Days',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/in27Days.jpg',
      genre: 'Genre2',
      rating: 3.5,
    },
    {
      id: 'the-naturals-book-1',
      name: 'The Naturals: Book 1',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/theNaturalsBook1.jpg',
      genre: 'Genre1',
      rating: 3.5,
    },
    {
      id: 'the-naturals-killer-instinct',
      name: 'Killer Instinct (The Naturals Book 1 )',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/theNaturalsKillerInstinct.jpg',
      genre: 'Genre1',
      rating: 3.5,
    },
    {
      id: 'the-naturals-all-in',
      name: 'All In (The Naturals Book 1 )',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/theNaturalsAllIn.jpg',
      genre: 'Genre1',
      rating: 3.5,
    },
    {
      id: 'the-naturals-bad-blood',
      name: 'Bad Blood (The Naturals Book 1 )',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/theNaturalsBadBlood.jpg',
      genre: 'Genre1',
      rating: 3.5,
    },
    {
      id: 'royal-elite-cruel-king',
      name: 'Cruel King (Royal Elite Book 0)',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/royalEliteCruelKing.jpg',
      genre: 'Genre3',
      rating: 3.5,
    },
    {
      id: 'royal-elite-deviant-king',
      name: 'DeviantKing (Royal Elite Book 1)',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/royalEliteDeviantKing.jpg',
      genre: 'Genre3',
      rating: 3.5,
    },
    {
      id: 'royal-elite-steel-princess',
      name: 'Steel Princess (Royal Elite Book 2)',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/royalEliteSteelPrincess.jpg',
      genre: 'Genre3',
      rating: 3.5,
    },
    {
      id: 'royal-elite-twisted-kingdom',
      name: 'Twisted Kingdom (Royal Elite Book 3)',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/royalEliteTwistedKingdom.jpg',
      genre: 'Genre3',
      rating: 3.5,
    },
    {
      id: 'royal-elite-black-knight',
      name: 'Black Knight (Royal Elite Book 4)',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/royalEliteBlackKnight.jpg',
      genre: 'Genre3',
      rating: 3.5,
    },
    {
      id: 'royal-elite-vicious-prince',
      name: 'ViciousPrince (Royal Elite Book 5)',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/royalEliteViciousPrince.jpg',
      genre: 'Genre3',
      rating: 3.5,
    },
    {
      id: 'royal-elite-ruthless-empire',
      name: 'RuthlessEmpire (Royal Elite Book 6)',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/royalEliteRuthlessEmpire.jpg',
      genre: 'Genre3',
      rating: 3.5,
    },
    {
      id: 'royal-elite--royal-elite-epilogue',
      name: 'Royal Elite Epilogue (Royal Elite Book 7)',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/royalEliteRoyalEliteEpilogue.jpg',
      genre: 'Genre3',
      rating: 3.5,
    },
    {
      id: 'img2',
      name: 'Temp',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/img2.jpg',
      genre: 'Genre2',
      rating: 3.5,
    },
    {
      id: 'img3',
      name: 'Temp',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/img3.jpg',
      genre: 'Genre2',
      rating: 3.5,
    },
    {
      id: 'img4',
      name: 'Temp',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/img4.jpg',
      genre: 'Genre2',
      rating: 3.5,
    },
    {
      id: 'img5',
      name: 'Temp',
      review: 'Review',
      imageLink: 'assets/images/novel-cover-pages/img5.jpg',
      genre: 'Genre2',
      rating: 3.5,
    },
    {
      id: 'img6',
      name: 'Temp',
      review:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis. Consequat id porta nibh venenatis. Amet mattis vulputate enim nulla aliquet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget mauris pharetra et ultrices. Turpis in eu mi bibendum neque egestas. Mattis molestie a iaculis at erat pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Cursus sit amet dictum sit amet justo donec enim. Gravida quis blandit turpis cursus. Egestas diam in arcu cursus euismod quis viverra. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis imperdiet massa tincidunt nunc pulvinar. Felis donec et odio pellentesque diam. Non enim praesent elementum facilisis. Non curabitur gravida arcu ac tortor dignissim. A iaculis at erat pellentesque adipiscing commodo elit. Risus pretium quam vulputate dignissim suspendisse in est. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vivamus at augue eget arcu dictum varius duis. Lobortis mattis aliquam faucibus purus in. Cum sociis natoque penatibus et magnis dis parturient montes. Et netus et malesuada fames ac turpis. In est ante in nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna nunc. Elementum integer enim neque volutpat. Aliquet eget sit amet tellus cras. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus a pellentesque sit amet porttitor eget. Amet purus gravida quis blandit turpis cursus in hac habitasse. Euismod in pellentesque massa placerat duis ultricies. Faucibus purus in massa tempor nec feugiat nisl. Feugiat in fermentum posuere urna nec. Amet consectetur adipiscing elit ut aliquam purus. Faucibus turpis in eu mi bibendum neque egestas congue. Id consectetur purus ut faucibus pulvinar elementum integer enim. Mattis vulputate enim nulla aliquet porttitor. Fringilla est ullamcorper eget nulla facilisi etiam. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci sagittis eu volutpat odio facilisis mauris sit.`,
      imageLink: 'assets/images/novel-cover-pages/img6.jpg',
      genre: 'Genre2',
      rating: 3.5,
    },
    {
      id: 'img7',
      name: 'Temp',
      review: 'Review',
      imageLink: 'assets/images/novel-cover-pages/img7.jpg',
      genre: 'Genre2',
      rating: 3.5,
    },
    {
      id: 'img8',
      name: 'Temp',
      review: 'Review',
      imageLink: 'assets/images/novel-cover-pages/img8.jpg',
      genre: 'Genre1',
      rating: 3.5,
    },
    {
      id: 'img9',
      name: 'Temp',
      review: 'Review',
      imageLink: 'assets/images/novel-cover-pages/img9.jpg',
      genre: 'Genre1',
      rating: 3.5,
    },
    {
      id: 'img10',
      name: 'Temp',
      review: 'Review',
      imageLink: 'assets/images/novel-cover-pages/img10.jpg',
      genre: 'Genre1',
      rating: 3.5,
    },
    {
      id: 'img11',
      name: 'Temp',
      review: 'Review',
      imageLink: 'assets/images/novel-cover-pages/img11.jpg',
      genre: 'Genre1',
      rating: 3.5,
    },
    {
      id: 'img12',
      name: 'Temp',
      review: 'Review',
      imageLink: 'assets/images/novel-cover-pages/img12.jpg',
      genre: 'Genre3',
      rating: 3.5,
    },
    {
      id: 'img13',
      name: 'Temp',
      review: 'Review',
      imageLink: 'assets/images/novel-cover-pages/img13.jpg',
      genre: 'Genre3',
      rating: 3.5,
    },
    {
      id: 'img14',
      name: 'Temp',
      review: 'Review',
      imageLink: 'assets/images/novel-cover-pages/img14.jpg',
      genre: 'Genre3',
      rating: 3.5,
    },
    {
      id: 'img15',
      name: 'Temp',
      review: 'Review',
      imageLink: 'assets/images/novel-cover-pages/img15.jpg',
      genre: 'Genre3',
      rating: 3.5,
    },
    {
      id: 'img16',
      name: 'Temp',
      review: 'Review',
      imageLink: 'assets/images/novel-cover-pages/img16.jpg',
      genre: 'Genre3',
      rating: 3.5,
    },
  ];
  genres = ['Genre1', 'Genre2', 'Genre3'];
  getNovelsByGenre(genre: String) {
    let temp: Novel[] = [];
    this.allNovels.forEach((novel) => {
      if (novel.genre === genre) {
        temp.push(novel);
      }
    });
    return temp;
  }
  getAllNovelsByGenre() {
    let allNovelsByGenre: NovelsByGenre[] = [];
    this.genres.forEach((genre) => {
      let novelsByGenre: NovelsByGenre = {
        title: genre,
        novels: this.getNovelsByGenre(genre),
      };
      allNovelsByGenre.push(novelsByGenre);
    });
    return allNovelsByGenre;
  }
}
