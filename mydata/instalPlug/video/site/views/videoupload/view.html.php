<?php
/**
 * Video Upload view file for front end users
 *
 * This file is to display add video page for front end users
 *
 * @category   Apptha
 * @package    Com_Contushdvideoshare
 * @version    3.8
 * @author     Apptha Team <developers@contus.in>
 * @copyright  Copyright (C) 2015 Apptha. All rights reserved.
 * @license    GNU General Public License http://www.gnu.org/copyleft/gpl.html
 */

/** Include component helper */
include_once (JPATH_COMPONENT_SITE . DIRECTORY_SEPARATOR . 'helper.php');

/** No direct access to this file */
defined ( '_JEXEC' ) || exitAction ( 'Restricted access' );

/** Import Joomla view library */
jimport ( 'joomla.application.component.view' );

/**
 * Videoupload view file
 *
 * @package Joomla.Contus_HD_Video_Share
 * @subpackage Com_Contushdvideoshare
 * @since 1.5
 */
class ContushdvideoshareViewvideoupload extends ContushdvideoshareView {
  /**
   * Function to set layout and model for view page.
   *
   * @param boolean $cachable
   *          If true, the view output will be cached
   * @param boolean $urlparams
   *          An array of safe url parameters and their variable types
   *          
   * @return ContushdvideoshareViewvideoupload object to support chaining.
   *        
   * @since 1.5
   */
  public function display($cachable = false, $urlparams = false) {
    /** Get model for videoupload */
    $model = $this->getModel ();
    
    /** Get category for upload view */
    $category = $model->getupload ();
    /** Assign video category to reference */
    $this->assignRef ( 'videocategory', $category [0] );
    /** Assign upload details to reference */ 
    $this->assignRef ( 'upload', $category [1] );
    /** Assign video details to reference */
    $this->assignRef ( 'videodetails', $category [2] );
    /** Get settings data for uplaod view */
    $get_site_settings = getSiteSettings ();
    /** Assign reference to settings for upload view */
    $this->assignRef ( 'dispenable', $get_site_settings );
    parent::display ();
  }
}