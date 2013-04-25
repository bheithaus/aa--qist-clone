module SessionsHelper

  def sign_in(user)
    cookies[:user_name] = user.user_name
  end

  def current_user
    @current_user ||= User.find_by_user_name(cookies[:user_name])
  end

  def sign_out
    cookies.delete(:user_name)
  end

private

  def signed_in?
    p current_user
    if !current_user
      redirect_to root_path
    end
  end
end
