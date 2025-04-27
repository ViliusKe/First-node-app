import Joi from "joi";

export default Joi.object({
  title: Joi.string().required(),
  raiting: Joi.string().required(),
  raiting: Joi.string().required(),
  description: Joi.string().required(),
  imdbLink: Joi.string().required(),
});
